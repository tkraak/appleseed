import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | request/location', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /request/location', async function (assert) {
    const locations = this.server.createList('office', 3);

    await visit('/request/location');

    assert.equal(currentURL(), '/request/location');
    assert.dom('header h1').hasText('Select a location');
    assert.dom('main .w-full p').hasText(locations.firstObject.phone);

    await click('main button');
    assert.equal(currentURL(), '/request/service');
  });
});
