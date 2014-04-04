define(['jquery'], function ($) {
  return (function (){
    var self = this,
      base_url = 'http://pinballfinder.org/pf2/pf',
      request_defaults = {
        url: base_url,
        data: {
          'f': 'json'
        }
      };

    self.request = function (data) {
      return $.ajax($.extend(true, {}, request_defaults, { data: data }));
    };

    self.getVenuesNearCoord = function (coord) {
      return self.request({ 'n': coord });
    };

    self.getRecentVenues = function() {
      return self.request();
    };

    return self;
  }());
});
