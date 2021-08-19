import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  description: () =>
    faker.random.arrayElement([
      'Intro Call',
      'Psychiatric Diagnostic Evaluation',
      'Physical Therapy Evaluation',
    ]),
  duration: () => faker.random.arrayElement([15, 30, 45, 60]),
  rate: () => faker.random.arrayElement(['50', '75', '100', '125']),
  callToBook: () => faker.datatype.boolean(),
});
