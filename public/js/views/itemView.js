define('ItemView', [
  'backbone',
  'underscore',
  'text!templates/itemView.html'
], function(Backbone, _, template) {
  var ItemView = Backbone.View.extend({
    // tagName: 'div',
    // className: 'item-container',
    // template: _.template( $('#itemTemplate').html() ),

    events: {
      'click .delete-item' : 'deleteItem'
    },

    initialize: function() {
      this.template = _.template(template);
      this.editing  = !this.model.id;
    },

    deleteItem: function() {
      // Delete model
      this.model.destroy();

      //Delete view
      this.remove();
    },

    render: function() {
      //this.el is what we defined in tagName. use $el to get access to jQuery html()
      this.$el.html( this.template( this.model.attributes ) );

      return this;
    }
  });
  return ItemView;
});