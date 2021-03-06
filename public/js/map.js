$(function initializeMap (){

  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
        'featureType': 'all',
        'elementType': 'all',
        'stylers': [{
                'visibility': 'on'
            }]
    },{
        'featureType': 'all',
        'elementType': 'labels',
        'stylers': [{
                'visibility': 'off'
            },{
                'saturation': '-100'
            }]
    },{
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': [{
                'saturation': 36
            }, {
                'color': '#000000'
            },{
                'lightness': 40
            },{
                'visibility': 'off'
            }]
    },{
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': [{
                'visibility': 'off'
            },{
                'color': '#000000'
            },{
                'lightness': 16
            }]
    },{
        'featureType': 'all',
        'elementType': 'labels.icon',
        'stylers': [{
                'visibility': 'off'
            }]
    },{
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#000000'
            },{
                'lightness': 20
            }]
    },{
        'featureType': 'administrative',
        'elementType': 'geometry.stroke',
        'stylers': [{
                'color': '#000000'
            },{
                'lightness': 17
            },{
                'weight': 1.2
            }]
    },{
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [{
                'color': '#000000'
            },{
                'lightness': 20
            }]
    },{
        'featureType': 'landscape',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#4d6059'
            }]
    },{
        'featureType': 'landscape',
        'elementType': 'geometry.stroke',
        'stylers': [{
                'color': '#4d6059'
            }]
    },{
        'featureType': 'landscape.natural',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#4d6059'
            }]
    },{
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [{
                'lightness': 21
            }]
    },{
        'featureType': 'poi',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#4d6059'
            }]
    },{
        'featureType': 'poi',
        'elementType': 'geometry.stroke',
        'stylers': [{
                'color': '#4d6059'
            }]
    },{
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [{
                'visibility': 'on'
            },{
                'color': '#7f8d89'
            }]
    },{
        'featureType': 'road',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#7f8d89'
            }]
    },{
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#7f8d89'
            },{
                'lightness': 17
            }]
    },{
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [{
                'color': '#7f8d89'
            },{
                'lightness': 29
            },{
                'weight': 0.2
            }]
    },{
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [{
                'color': '#000000'
            },{
                'lightness': 18
            }]
    },{
        'featureType': 'road.arterial',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#7f8d89'
            }]
    },{
        'featureType': 'road.arterial',
        'elementType': 'geometry.stroke',
        'stylers': [{
                'color': '#7f8d89'
            }]
    },{
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [{
                'color': '#000000'
            },{
                'lightness': 16
            }]
    },{
        'featureType': 'road.local',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#7f8d89'
            }]
    },{
        'featureType': 'road.local',
        'elementType': 'geometry.stroke',
        'stylers': [{
                'color': '#7f8d89'
            }]
    },{
        'featureType': 'transit',
        'elementType': 'geometry',
        'stylers': [{
                'color': '#000000'
            },{
                'lightness': 19
            }]
    },{
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [{
                'color': '#2b3638'
            },{
                'visibility': 'on'
            }]
    },{
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [{
                'color': '#2b3638'
            },{
                'lightness': 17
            }]
    },{
        'featureType': 'water',
        'elementType': 'geometry.fill',
        'stylers': [{
                'color': '#24282b'
            }]
    },{
        'featureType': 'water',
        'elementType': 'geometry.stroke',
        'stylers': [{
                'color': '#24282b'
            }]
    },{
        'featureType': 'water',
        'elementType': 'labels',
        'stylers': [{
                'visibility': 'off'
            }]
    },{
        'featureType': 'water',
        'elementType': 'labels.text',
        'stylers': [{
                'visibility': 'off'
            }]
    },{
        'featureType': 'water',
        'elementType': 'labels.text.fill',
        'stylers': [{
                'visibility': 'off'
            }]
    },{
        'featureType': 'water',
        'elementType': 'labels.text.stroke',
        'stylers': [{
                'visibility': 'off'
            }]
    },{
        'featureType': 'water',
        'elementType': 'labels.icon',
        'stylers': [{
                'visibility': 'off'
            }]
    }]

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  window.currentMarkers = [];

  window.drawMarker = function (type, coords, name) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng,
      title: name
    });
    currentMarkers.push(marker);
    marker.setMap(currentMap);
  }

//   drawMarker('hotel', hotels[0].place.location);
  //drawMarker('restaurant', [40.705137, -74.013940]);
  //drawMarker('activity', [40.716291, -73.995315]);
  // remove marker: marker.setMap(null).

});
