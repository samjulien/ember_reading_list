import Ember from 'ember';

export default Ember.Controller.extend({
	books: function(){
		return this.store.find('book')
		.sortBy('title');
	}.property(),
	orderedBooks: function(){
		return this.get('books')
		 .sortBy('title');
	}.property('books'),
	genres: function(){
		return this.store.find('genre');
	}.property()
});