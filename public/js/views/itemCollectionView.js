define('ItemCollectionView', [
  'backbone',
  'jquery',
  'underscore',
  'FavoriteItem',
  'ItemCollection',
  'ItemView'
], function(Backbone, $, _, FavoriteItem, ItemCollection, ItemView) {
  var ItemCollectionView = Backbone.View.extend({
    el: '#item-collection',

    events: {
      'click #add-item' : 'addFavoriteItem'
    },

    initialize: function(initialItems) {
      this.collection = new ItemCollection(initialItems);
      this.listenTo( this.collection, 'add', this.renderItem );
      this.render();
    },

    // render the ItemCollection by rendering each item in its collection
    render: function() {
      this.collection.each(function(item) {
        this.renderItem(item);
      }, this);
    },

    // render an item by creating an ItemView and appending the
    // element it renders to the Itemcollection's element
    renderItem: function(item) {
      var itemView = new ItemView({
        model: item
      });

      this.$el.append( itemView.render().el );
    },

    addFavoriteItem: function(e) {
      console.log("fooo")
      e.preventDefault();

      var formData = {};

      $('#add-favorite-item div').children('input').each( function(i, el) {
        if ( $(el).val() != '')
        {
          formData[el.id] = $(el).val();
        }
      });

      this.collection.add( new FavoriteItem(formData) );
    }
  });

  return ItemCollectionView;
});