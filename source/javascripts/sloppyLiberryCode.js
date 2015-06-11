$(document).ready(function() {
  try{Typekit.load();}catch(e){}

  function initialize() {

    var styles = [
      { featureType: "administrative",
        elementType: "labels",
        stylers: [{ visibility: "off" } ]},
      { featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" } ]},
      { featureType: "water",
        elementType: "labels",
        stylers: [{ visibility: "off" } ]},
      { featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#94d5bb" } ]},
      { featureType: "landscape",
        elementType: "labels",
        stylers: [{ visibility: "off" } ]},
      { featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [{ color: "#e9e5dc" } ]},
      { featureType: "poi",
         elementType: "geometry.fill",
         stylers: [{ color: "#e9e5dc" } ]},
      { featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ color: '#f9f4f2' } ]},
      { featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e0d9cf" } ]},
      { featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" } ]},
      { featureType: "transit",
        elementType: "line.fill",
        stylers: [{ color: '#f9f4f2' } ]}
    ];

    var center = new google.maps.LatLng(43.071047,-89.380293);

    var map_canvas = document.getElementById('where-map');
    var map_options = {
      center: center,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      draggable: false,
      scrollwheel: false,
      disableDefaultUI: true,
      keyboardShortcuts: false,
      styles: styles
    };

    var map = new google.maps.Map(map_canvas, map_options);

    var markerCenter = new google.maps.LatLng(43.071647,-89.380293);

    var marker = new google.maps.Marker({
        position: markerCenter,
        map: map,
        title: 'Hello World!'
    });

    google.maps.event.addDomListener(window, 'resize', function() {
      map.panTo(center);
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);
});
