import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  geolocation: () => ({
    lat: faker.address.latitude(),
    lng: faker.address.longitude(),
  }),
  isPublic: () => faker.datatype.boolean(),
  isVideo: () => faker.datatype.boolean(),
  name: () =>
    faker.random.arrayElement([
      'Apex Counseling Center',
      'True Sports Physical Therapy',
      'Grand Therapeutic Services',
    ]),
  phone: () => faker.phone.phoneNumber(),
});
