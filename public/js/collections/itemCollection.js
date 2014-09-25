define('ItemCollection', [
  'backbone',
  'FavoriteItem'
], function(Backbone, FavoriteItem) {
  var ItemCollection = Backbone.Collection.extend({
    model: FavoriteItem,
    url: '/api/items'
  });

  return ItemCollection;
});
