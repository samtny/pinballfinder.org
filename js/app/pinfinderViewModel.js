define(['jquery', 'knockout', 'underscore', 'pf'], function ($, ko, _, pf) {
  return function pinfinderViewModel() {
    var self = this;

    self.supah = 'ready';
    self.mailto = ko.observable(['mailto:', 'pin', 'finder', 'app', '@', 'pinballfinder.org', '?Subject=Pinballfinder.org'].join(''));
    self.about = ko.observable('About');
  }
});
