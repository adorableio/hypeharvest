$(document).ready(function() {
  try{Typekit.load();}catch(e){}

  function initialize() {

    var green = '#94d5bb',
        white = '#f9f4f2',
        cream = '#e9e5dc',
        darkCream = '#e0d9cf',
        blue = '#91c1f9',
        lightBlue = '#b7d4f9';

    var water = lightBlue,
        landscape = cream,
        poi = cream,
        road = darkCream,
        transit = white;

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
        stylers: [{ color: water } ]},
      { featureType: "landscape",
        elementType: "labels",
        stylers: [{ visibility: "off" } ]},
      { featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [{ color: landscape } ]},
      { featureType: "poi",
         elementType: "geometry.fill",
         stylers: [{ color: poi } ]},
      { featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ color: white } ]},
      { featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: road } ]},
      { featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" } ]},
      { featureType: "transit",
        elementType: "line.fill",
        stylers: [{ color: transit } ]}
    ];

    var center = new google.maps.LatLng(43.0745, -89.3894);

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

    var markerCenter = new google.maps.LatLng(43.074692,-89.3894);

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
