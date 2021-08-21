import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | request', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /request/service', async function (assert) {
    const services = this.server.createList('cpt-code', 3);

    await visit('/request/service');

    assert.equal(currentURL(), '/request/service');
    assert.dom('header h1').hasText('Request an appointment');
    assert.dom('main h3').exists({ count: 3 });
    assert.dom('main h3').hasText(services.firstObject.description);

    await click('main button');
    assert.equal(currentURL(), '/request/location');
  });
});
