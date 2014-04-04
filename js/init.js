requirejs.config({
  baseUrl: 'js/lib',
  paths: {
    'app': '../app',
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
    'maps': '//maps.googleapis.com/maps/api/js?key=AIzaSyCMWL8VtaTA5ORZro3vPvwfZxWel1sgwPg&sensor=false'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    }
  }
});

require(['knockout', 'app/pinfinderViewModel', 'bootstrap', 'domReady!'], function (ko, pinfinderViewModel) {
  ko.applyBindings(new pinfinderViewModel());
});
