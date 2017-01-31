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
    $('#hotel-itinerary').html(choice);
    drawMarker('hotel', hotels[choice].place.location);
  });

  $("#add-resto").click("button", function(){
    var choice = $("#restaurant-choices").val();
    var newResto = $('<p></p>');
    newResto.html(choice);
    $('#resto-itinerary').append(newResto);
    drawMarker('restaurant', choice.place.location);
  });

  $("#add-activity").click("button", function(){
    var choice = $("#activity-choices").val();
    var newActivity = $('<p></p>');
    newActivity.html(choice);
    $('#activity-itinerary').append(newActivity);
    drawMarker('activity', choice.place.location);
  });
});
