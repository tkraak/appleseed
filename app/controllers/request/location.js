import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestLocationController extends Controller {
  @service router;

  @action
  handleLocationSelect() {
    this.router.transitionTo('request.service');
  }
}
