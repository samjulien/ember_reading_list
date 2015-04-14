import Ember from 'ember';

export default Ember.ArrayController.extend({
	books: function(){
		return this.store.find('book');
	}.property()
});