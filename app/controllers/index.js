import Ember from 'ember';

export default Ember.Controller.extend({
	books: function(){
		return this.store.find('book');
	}.property(),
	genres: function(){
		return this.store.find('genre');
	}.property()
});