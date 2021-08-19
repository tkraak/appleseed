import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | request', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /request', async function (assert) {
    await visit('/request');

    assert.equal(currentURL(), '/request/service');
  });
});
