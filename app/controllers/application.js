import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import config from 'appleseed/config/environment';

export default class ApplicationController extends Controller {
  @service router;

  get mainMenuItemName() {
    const { mainMenuItems } = config.APP;

    return mainMenuItems[this.router.currentRouteName];
  }
}
