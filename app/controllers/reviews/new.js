import Ember from 'ember';

export default Ember.Controller.extend({
	ratings: [5,4,3,2,1],
	bookGenres: [],
	actions: {
		createReview: function() {
			var controller = this;
			this.get('model').save().then(function(){
				controller.transitionToRoute('index');
			});
		}
	}
});