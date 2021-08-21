import Model, { attr } from '@ember-data/model';

export default class OfficeModel extends Model {
  @attr geolocation;
  @attr('boolean') isPublic;
  @attr('boolean') isVideo;
  @attr('string') name;
  @attr('string') phone;
}
