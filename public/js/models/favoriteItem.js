define('FavoriteItem', [
  'backbone',
  'underscore'
], function(Backbone, _) {
  // Item Model
  // The basic **Item** model has an item_image, location name, a geographical location (coordinates), and a date visited.
  var FavoriteItem = Backbone.Model.extend({
    defaults: {
      name: 'foobar name',
      location_name: '',
      address: '2316 westbury',
      latitude: '',
      longitude: '',
      visited_date: '',
      image: 'http://asilverwareaffair.net/wp-content/uploads/2013/12/placeholder.png'
    }
  });

  return FavoriteItem;
});