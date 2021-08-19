export default function () {
  this.namespace = 'api/v1';
  this.logging = true;

  this.get('/cpt-codes');

  this.passthrough();
}
