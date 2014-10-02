define('FavoriteItemApp', [
  'backbone',
  'jquery',
  'FavoriteItemRouter'
], function(Backbone, $, Router) {
  function FavoriteItemApp() {
    // Defining the master router on the app & triggering all navigation from this instance.
    this.router = new Router();
    this.start = function() {
      // Triggering the initial route
      Backbone.history.start();
      // $(document).foundation();
    }
  }

  return FavoriteItemApp;
});