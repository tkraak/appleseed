import Route from '@ember/routing/route';

export default class RequestServiceRoute extends Route {
  async model() {
    return this.store.findAll('office');
  }
}
