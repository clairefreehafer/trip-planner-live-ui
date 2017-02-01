$(document).ready(function(){
  var hotelChoices = $( "#hotel-choices" );
  hotels.forEach(function(hotel){
    var newHotel = $("<option></option>");
    newHotel.html(hotel.name);
    hotelChoices.append(newHotel);
  });

  var restaurantChoices = $( "#restaurant-choices" );
  restaurants.forEach(function(restaurant){
    var newResto = $("<option></option>");
    newResto.html(restaurant.name);
    restaurantChoices.append(newResto);
  });

  var activityChoices = $( "#activity-choices" );
  activities.forEach(function(activity){
    var newActivity = $("<option></option>");
    newActivity.html(activity.name);
    activityChoices.append(newActivity);
  });

  $("#add-hotel").click("button", function(){
    var choice = $("#hotel-choices").val();
    var newHotel = $('<p></p>');
    $('#hotel-itinerary').html(newHotel)
    newHotel.html(choice + '<button class="btn btn-xs remove btn-circle" style="float:right">x</button>');

    $('.remove').click(function() {
      $(this).parent().remove();


      marker.setMap(null)
    })

    hotels.forEach(function(hotel) {
      if (choice === hotel.name) {
        drawMarker('hotel', hotel.place.location, hotel.name);
      }
    });
  });

  $("#add-resto").click("button", function(){
    var choice = $("#restaurant-choices").val();
    var newResto = $('<p></p>');
    newResto.html(choice + '<button class="btn btn-xs remove btn-circle" style="float:right">x</button>');
    $('#resto-itinerary').append(newResto);

    $('.remove').click(function() {
      $(this).parent().remove();


      marker.setMap(null)
    })

    restaurants.forEach(function(restaurant) {
      if (choice === restaurant.name) {
        drawMarker('restaurant', restaurant.place.location, restaurant.name);
      }
    });
  });

  $("#add-activity").click("button", function(){
    var choice = $("#activity-choices").val();
    var newActivity = $('<p></p>');
    newActivity.html(choice + '<button class="btn btn-xs remove btn-circle" style="float:right">x</button>');
    $('#activity-itinerary').append(newActivity);

    $('.remove').click(function() {
      var activityName = $(this).parent()[0].innerText.slice(0, -1);

      currentMarkers.forEach(function(marker) {
        if (marker.title === activityName) {
          marker.setMap(null);
        }
      })

      $(this).parent().remove();

      marker.setMap(null)
    })

    activities.forEach(function(activity) {
      if (choice === activity.name) {
        drawMarker('activity', activity.place.location, activity.name);
      }
    });
  });

  // $('.list-group').click('button', function() {
  //   $(this).find('p').remove();
  //   console.log();

  //   marker.setMap(null)
  // })

  // $('.remove').click(function() {
  //   // $(this).find('p').remove();
  //   console.log(this);

  //   // marker.setMap(null)
  // })
});
