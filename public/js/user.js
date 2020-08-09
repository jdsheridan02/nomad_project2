// Code here takes user input and post info into database to be recalled on index page.

// when user clicks add-btn
$("#airlineBtn").on("click", function(event) {
    event.preventDefault();
  
    // make a airline obj
    var airlineEntry = {
      // name from name input
      airline: $("#airline-name").val().trim(),
      // departure time
      departureTime: $("#departure-time").val().trim(),
      // boarding time
      boardingTime: $("#boarding-time").val().trim(),
      // departure gate
      departureGate: $("#depature-gate").val().trim(),
      // seat assignment
      seatAssignment: $("#seat-assignment").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/user", airlineEntry)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding hotel
        console.log("Adding airline info...");
      });
  
    // // empty each input box by replacing the value with an empty string
    // $("#name").val("");
    // $("#airline").val("");
    // $("#hotel").val("");
    // $("#point-of-interest").val("");
  
  });
  
  $("#hotelBtn").on("click", function(event) {
    event.preventDefault();
  
    // make a hotel obj
    var hotelEntry = {
      // name from name input
      name: $("#hotel-name").val().trim(),
      // address info
      address: $("#hotel-address").val().trim(),
      // check in date
      checkin: $("#check-in-date").val().trim(),
      // checkout date
      checkout: $("#check-out-date").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/user", hotelEntry)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        console.log("Adding hotel info...");
      });
  
    // // empty each input box by replacing the value with an empty string
    // $("#name").val("");
    // $("#airline").val("");
    // $("#hotel").val("");
    // $("#point-of-interest").val("");
  
  });