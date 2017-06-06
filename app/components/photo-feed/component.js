import Component from 'ember-component';
import Instafeed from 'instafeed';
import config from '../../config/environment';

export default Component.extend({
  didInsertElement(){
    // Instafeed
    var feed = new Instafeed({
      get: 'tagged',
      tagName: 'frenchiesofinstagram',
      accessToken: config.INSTAGRAM_ACCESS_TOKEN,
      sortBy: 'most-recent',
      limit: '21'
    });
    feed.run();
  }
});
