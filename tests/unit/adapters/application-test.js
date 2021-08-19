import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.adapter = this.owner.lookup('adapter:application');
  });

  test('namespace', function (assert) {
    const { namespace } = this.adapter;
    assert.equal(namespace, 'api/v1');
  });
});
