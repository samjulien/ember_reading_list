import DS from 'ember-data';
import FixtureData from '../fixtures/book';

var Book = DS.Model.extend({
	title: DS.attr(),
	author: DS.attr(),
	review: DS.attr(),
	amazon_id: DS.attr('string'),
	rating: DS.attr('number'),
	genre: DS.belongsTo('genre', {async: true}),
	url: function() {
		return "http://www.amazon.com/gp/product/"+this.get('amazon_id');
	}.property('amazon_id'),
	image: function() {
		return "http://images.amazon.com/images/P/"+this.get('amazon_id')+".01.ZTZZZZZZ.jpg";
  	}.property('amazon_id')
});

Book.reopenClass({
	FIXTURES: FixtureData
});

export default Book;