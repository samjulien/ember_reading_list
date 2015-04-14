import DS from 'ember-data';
import FixtureData from '../fixtures/genre';

var Genre = DS.Model.extend({
  name: DS.attr(),
  books: DS.hasMany('book', {async: true})
});

Genre.reopenClass({
	FIXTURES: FixtureData
});

export default Genre;