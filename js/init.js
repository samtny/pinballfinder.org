requirejs.config({
  'baseUrl': 'js/lib',
  'paths': {
    'app': '../app',
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min'
  }
});

require(['knockout', 'app/pinfinderViewModel', 'domReady!'], function (ko, pinfinderViewModel) {
  ko.applyBindings(new pinfinderViewModel());
});
