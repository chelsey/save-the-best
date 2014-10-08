define('ItemCollectionView', [
  'backbone',
  'jquery',
  'underscore',
  'FavoriteItem',
  'ItemCollection',
  'ItemView',
  'text!templates/itemCollection.html'
], function(Backbone, $, _, FavoriteItem, ItemCollection, ItemView, template) {
  var ItemCollectionView = Backbone.View.extend({
    el: '#item-collection',

    events: {
      'click .add-item' : 'addFavoriteItem'
    },

    initialize: function(initialItems) {
      this.template  = _.template(template);

      this.collection = new ItemCollection(initalItems);
      this.listenTo( this.collection, 'add', this.renderItem );
      this.listenTo( this.collection, 'reset', this.render);
    },

    // render the ItemCollection by rendering each item in its collection
    render: function() {
      this.$el.html(this.template({
        items: this.collection
      }));

      this.collection.each(function(item) {
        this.renderItem(item);
      }, this);
    },

    addFavoriteItem: function(e) {
      e.preventDefault();

      var formData = {};

      $('#add-favorite-item div').children('input').each( function(i, el) {
        formData[el.id] = $(el).val();
      });

      this.collection.add( new FavoriteItem(formData));
    },

    // render an item by creating an ItemView and appending the
    // element it renders to the Itemcollection's element
    renderItem: function(item) {
      var itemView = new ItemView({ model: item }),
        newItem = itemView.render().$el.hide();

      this.$el.prepend( itemView.render().el );
      newItem.slideDown();
    }
  });

  var initalItems = [{ name: "French Toast", location_name: "Grandma's", address: "Maui, Hawaii", visited_date: "August 31, 2014" },
    { name: "Shrimp", location_name: "Star Noodle", address: "Maui, Hawaii", visited_date: "August 30, 2014", image: 'http://asilverwareaffair.net/wp-content/uploads/2013/12/placeholder.png'},
    { name: "Avocado Toast", location_name: "Danny's Apartment", address: "San Francisco, CA", visited_date: "July 20, 2014"}]

  return ItemCollectionView;
});