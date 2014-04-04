define(['jquery', 'knockout', 'underscore', 'pf', 'async!maps'], function ($, ko, _, pf) {
  return function pinfinderViewModel() {
    var self = this,
      map,
      pin = {
        url: 'images/pin.png',
        size: google.maps.Size(20, 20),
        origin: google.maps.Point(0, 0),
        anchor: google.maps.Point(0, 20)
      };

    self.mailto = ko.observable(['mailto:', 'pin', 'finder', 'app', '@', 'pinballfinder.org', '?Subject=Pinballfinder.org'].join(''));
    self.about = ko.observable('About');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var mapOptions = {
          zoom:       19,
          mapTypeId:  google.maps.MapTypeId.ROADMAP,
          center:     new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        pf.getVenuesNearCoord(position.coords.latitude + ',' + position.coords.longitude).done(function (data) {
          console.log('data', data);
          if (data.venues.length) {
            var bounds = new google.maps.LatLngBounds();
            bounds.extend(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

            _.each(data.venues, function (venue, index) {
              var marker = new google.maps.Marker({
                position: new google.maps.LatLng(venue.lat, venue.lon),
                map: map,
                icon: pin,
                title: venue.name
              });

              if (index < 1) {
                bounds.extend(new google.maps.LatLng(venue.lat, venue.lon));
              }
            });
            console.log('bounds', bounds);
            map.fitBounds(bounds);
          }

        });
        //$('#map-canvas').show();

        //google.maps.event.trigger(map, 'resize');
      }, function (error) {

      });
    }
  }
});
