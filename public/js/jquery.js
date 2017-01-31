$(document).ready(function(){
  var hotelChoices = $( "#hotel-choices" );
  hotels.forEach(function(hotel){
    var newHotel = $("<option id='hotel'></option>");
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

  $("#hotel-choices").change(function(){
    $("#hotel").addClass("selected");
  });

  $("#add-hotel").click("button", function(){
    var choice = $(".selected")
  });
  //
  // $("#add-resto").on('click', function(){
  //
  // });
  //
  // $("#add-hotel").on('click', function(){
  //
  // });
});
