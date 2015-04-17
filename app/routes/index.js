import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.csrf.fetchToken();
  },
  model: function() {
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      genres: this.store.findAll('genre')
    });
  },
  setupController: function(controller, model) {
    controller.set('books', model.books.sortBy('title'));
    controller.set('genres', model.genres.sortBy('name'));
  }
});