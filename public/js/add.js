// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#airlineBtn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var airlineEntry = {
      // name from name input
      airline: $("#airline-name").val().trim(),
      // role from role input
      departureTime: $("#departure-time").val().trim(),
      // age from age input
      boardingTime: $("#boarding-time").val().trim(),
      // points from force-points input
      departureGate: $("#depature-gate").val().trim(),

      seatAssignment: $("#seat-assignment").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/index", airlineEntry)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding character...");
      });
  
    // // empty each input box by replacing the value with an empty string
    // $("#name").val("");
    // $("#airline").val("");
    // $("#hotel").val("");
    // $("#point-of-interest").val("");
  
  });
  
  $("#hotelBtn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var hotelEntry = {
      // name from name input
      name: $("#hotel-name").val().trim(),
      // role from role input
      address: $("#hotel-address").val().trim(),
      // age from age input
      checkin: $("#check-in-date").val().trim(),
      // points from force-points input
      checkout: $("#check-out-date").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", hotelEntry)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding character...");
      });
  
    // // empty each input box by replacing the value with an empty string
    // $("#name").val("");
    // $("#airline").val("");
    // $("#hotel").val("");
    // $("#point-of-interest").val("");
  
  });