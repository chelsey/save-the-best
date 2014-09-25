define('FavoriteItemRouter', [
  'backbone',
  'ItemCollectionView',
  'ItemCollection'
], function(Backbone, ItemCollectionView, ItemCollection) {
  var FavoriteItemRouter = Backbone.Router.extend({
    routes: {
      '' : 'defaultRoute'
    },

    initialize: function () {
      this.collection = new ItemCollection();
      this.collectionview = new ItemCollectionView({ collection: this.collection });
    },

    defaultRoute: function() {
      // Render an before fetching data to have actionable buttons
      this.collectionview.render();
      this.collectionview.fetchData();
    }
  });

  return FavoriteItemRouter;
});
