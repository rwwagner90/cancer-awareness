import Route from 'ember-route';
import service from 'ember-service/inject';

export default Route.extend({
  headData: service(),
  afterModel() {
    return this.get('headData').setProperties({
      title: 'Cancer Awareness - Ember Cares',
      description: 'Join us, and the rest of the Ember community in the fight against cancer.',
      type: 'website',
      url: 'https://embercares.com/'
    });
  },
});
