import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('participate', { path: '' }, function() {
    this.route('login', { path: '/' });
    this.route('survey', function() {
      this.route('results');
      this.route('consent');
    });
  });
  this.route('exit');
});

export default Router;
