import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | cpt-code', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('cpt-code', {});
    assert.ok(model);
  });
});
