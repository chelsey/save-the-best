define('FavoriteItem', [
  'backbone',
  'underscore'
], function(Backbone, _) {
  // Location Model
  // The basic **Item** model has an item_image, location name, a geographical location (coordinates), and a date visited.
  var FavoriteItem = Backbone.Model.extend({
    defaults: {
      image: '',
      name: '',
      location_name: '',
      address: '',
      latitude: '',
      longitude: '',
      visited_date: ''
    }
  });

  return FavoriteItem;
});