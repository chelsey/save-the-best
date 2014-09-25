requirejs.config({

  paths: {
    // External dependencies
    'backbone'   : 'vendor/backbone-min',
    'backbonemap': 'vendor/backbone-min.map',
    'bootstrap'  : 'vendor/bootstrap.min',
    'jquery'     : 'vendor/jquery',
    'underscore' : 'vendor/underscore-min',
    'text'       : 'vendor/text',

    // Application code
    'FavoriteItemApp'         : './app',
    'FavoriteItemRouter'      : 'router',
    'FavoriteItem'            : 'models/favoriteItem',
    'ItemCollectionView'      : 'views/itemCollectionView',
    'ItemView'                : 'views/itemView',
    'ItemCollection'          : 'collections/itemCollection'

  }, // set up custom paths to libraries, or paths to RequireJS plugins

  shim: {
    'backbone' : {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },

    'bootstrap' : {
      exports: 'boot'
    },

    'jquery' : {
      exports: '$'
    },

    'underscore' : {
      exports: '_'
    }
  }

});

require(['FavoriteItemApp'], function(FavoriteItemApp){
  new FavoriteItemApp().start();
});