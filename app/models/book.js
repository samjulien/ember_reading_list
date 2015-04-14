import DS from 'ember-data';
import FixtureData from '../fixtures/book';

var Book = DS.Model.extend({
	title: DS.attr('string'),
	author: DS.attr('string'),
	description: DS.attr('string'),
	amazon_id: DS.attr('string'),
	rating: DS.attr(),
	finished_on: DS.attr(),
	genres: DS.attr(),
});

Book.reopenClass({
	FIXTURES: FixtureData
});

export default Book;