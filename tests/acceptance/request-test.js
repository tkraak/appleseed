import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | request', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /request', async function (assert) {
    this.server.createList('cpt-code', 3);

    await visit('/request');

    assert.equal(currentURL(), '/request/service');
    assert.dom('header h1').hasText('Select a service');
  });
});
