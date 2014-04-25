define(['jquery', 'knockout', 'underscore', 'pf', 'async!maps', 'geolocationmarker'], function ($, ko, _, pf) {
  return function pinfinderViewModel() {
    var self = this,
      map,
      currentLocationMarker,
      pin = {
        url: 'images/pin.png',
        size: google.maps.Size(20, 20),
        origin: google.maps.Point(0, 0),
        anchor: google.maps.Point(0, 20)
      },
      infoWindow;

    self.mailto = ko.observable(['mailto:', 'pin', 'finder', 'app', '@', 'pinballfinder.org', '?Subject=Pinballfinder.org'].join(''));
    self.about = ko.observable('About');

    self.markers = ko.observableArray();

    self.addMarker = function (lat, lon, title, subtitle) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lon),
        map: map,
        icon: pin,
        title: title
      });

      var info = '<a href="#"><h4>' + title + '</h4><p>' + subtitle + '</p></a>';

      google.maps.event.addListener(marker, 'click', function () {
        if (infoWindow) {
          infoWindow.close();
        }

        infoWindow = new google.maps.InfoWindow({
          content: info
        });

        infoWindow.open(map, marker);
      });

      self.markers.push(marker);

      return marker;
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var mapOptions = {
          zoom:       19,
          mapTypeId:  google.maps.MapTypeId.ROADMAP,
          center:     new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        };

        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
        currentLocationMarker = new GeolocationMarker(map);

        pf.getVenuesNearCoord(position.coords.latitude + ',' + position.coords.longitude)
          .done(function (data) {
            if (data.venues.length) {
              var bounds = new google.maps.LatLngBounds();
              bounds.extend(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

              _.each(data.venues, function (venue, index) {
                self.addMarker(venue.lat, venue.lon, venue.name, venue.street);

                if (index < 5) {
                  bounds.extend(new google.maps.LatLng(venue.lat, venue.lon));
                }
              });

              map.fitBounds(bounds);
              $('#map-canvas').animate({ opacity: 1 }, 180);

              _.delay(function () {
                google.maps.event.trigger(_.first(self.markers()), 'click');
              }, 1200);
            }
          });

        google.maps.event.addListener(map, 'click', function () {
          if (infoWindow) {
            infoWindow.close();
          }
        });
        //google.maps.event.trigger(map, 'resize');
      }, function (error) {

      });
    }
  }
});
