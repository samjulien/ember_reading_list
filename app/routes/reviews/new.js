import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
    return this.csrf.fetchToken();
  	},
	model: function() {
		return Ember.RSVP.hash({
      		book: this.store.createRecord('book'),
      		genres: this.store.findAll('genre')
    	});
	},
	setupController: function(controller, model){
		controller.set('model', model.book);
		controller.set('genres', model.genres);
	},
	actions: {
		willTransition: function(transition) {
			if(this.currentModel.book.get('isNew')) {
				if(confirm("Are you sure you want to abandon progress?")) {
					this.currentModel.book.destroyRecord();
				} else {
					transition.abort();
				}
			}
		}
	}
});