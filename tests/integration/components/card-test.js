import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function (assert) {
    const location = this.server.create('office', { isVideo: true });
    this.setProperties({
      location,
      handleClick: () => {},
    });

    await render(hbs`
      <Card
        @location={{this.location}}
        @handleClick={{this.handleClick}}
      />
    `);

    assert
      .dom(this.element.querySelector('img'))
      .hasProperty('src', 'http://localhost:4200/img/video-office.png');
    assert.dom(this.element.querySelector('h1')).hasText(location.name);
    assert.dom(this.element.querySelector('h2')).hasText('Telemedicine Only');
    assert.dom(this.element.querySelector('p')).hasText(location.phone);
  });
});
