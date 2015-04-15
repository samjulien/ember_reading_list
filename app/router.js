import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('book', { path: 'books/:book_id' });
	this.resource('genre', { path: 'genres/:genre_id' });
});

export default Router;
