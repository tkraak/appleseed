import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RequestServiceController extends Controller {
  @service router;

  @action
  handleServiceSelect() {
    this.router.transitionTo('request.location');
  }
}
