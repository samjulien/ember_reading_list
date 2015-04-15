import Ember from 'ember';

export default Ember.Controller.extend({
	orderedBooks: function(){
		return this.get('books')
		 .sortBy('title');
	}.property('books'),
	orderedGenres: function(){
		return this.get('genres')
		  .sortBy('name');
	}.property('genres')
});