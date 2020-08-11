$(document).ready(function () {
  // Code here takes user input and post info into database to be recalled on index page.

  $(document).on("click", "#airlineBtn", airlineInfo);
  $(document).on("click", "#hotelBtn", hotelInfo);

  // when user clicks add-btn
  function airlineInfo(event) {
    event.preventDefault();

    console.log("storing airline info")
    // make a airline obj
    var airlineEntry = {
      // name from name input
      airlineName: $("#airline-name").val().trim(),
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
    $.post("/api/airline", airlineEntry)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding hotel
        console.log("****");
      });

  };

  function hotelInfo(event) {
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
    $.post("/api/hotel", hotelEntry)
      // on success, run this callback
      .then(function (data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        console.log("Adding hotel info...");
      });

    // // A function for rendering the list of authors to the page
    // function renderAirline(rows) {
    //   authorList.children().not(":last").remove();
    //   authorContainer.children(".alert").remove();
    //   if (rows.length) {
    //     console.log(rows);
    //     authorList.prepend(rows);
    //   }
    //   else {
    //     renderEmpty();
    //   }
    // }

  };

});