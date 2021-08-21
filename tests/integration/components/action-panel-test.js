import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | action-panel', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      title: 'Intro Call',
      subTitle: '30',
      handleClick: () => {},
    });

    await render(hbs`
      <ActionPanel
        @title={{this.title}}
        @subTitle={{this.subTitle}}
        @handleClick={{this.handleClick}}
      />
    `);

    assert.dom('h3').hasText('Intro Call');
    assert.dom('p').hasText('30 minutes');
  });
});
