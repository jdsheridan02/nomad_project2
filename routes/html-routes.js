// // Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
// const airline = require("../models/airline");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/user");
    }
    res.render("./signup");
  });

  app.get("/user", (req, res) => {
    // If the user already has an account send them to the user page
    // if (req.user) {
    //   res.redirect("/user");
    // }
    res.render("./user");
  });

  app.get("/index", (req, res) => {
    let airlineArr = [];
    let hotelArr = [];
    db.Airline.findAll({
      include: [db.User]}).then(function (dbAirline) {
      airlineArr = dbAirline
      // .map(item => {
      //   return {airline: airline.airlinename, boardingTime: airline.boardingTime, departureGate: airline.departureGate, seatAssignment: airline.seatAssignment}
      // })
      db.Hotel.findAll({
        include: [db.User]
      }).then(function (dbHotel) {
        hotelArr = dbHotel
        res.render("./index", { airline: airlineArr, hotel: hotelArr })
      })
    })
  });


  // app.get("/index", (req, res) => {
  //   db.airline.findAll({
  //     include: [db.User]
  //   }).then(function (dbAirline) {
  //     res.render("./index", { airline: dbAirline });
  //   });
  // });
  // //   res.render("./index");
  // // });

  // app.get("/index", (req, res) => {
  //   db.hotel.findAll({
  //     include: [db.User]
  //   }).then(function (dbHotel) {
  //     res.render("./index", { hotel: dbHotel });
  //   });
  // });

  // Here we've user our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/user");
    }
    res.render("login");
  });
};
