import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
      		book: this.store.createRecord('book'),
      		genres: this.store.findAll('genre')
    	});
	},
	setupController: function(controller, model){
		controller.set('model', model.book);
		controller.set('genres', model.genres);
	}
});