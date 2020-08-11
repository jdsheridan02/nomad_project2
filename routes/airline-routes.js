var db = require("../models");

module.exports = function (app) {
  // app.get("/api/index", function (req, res) {
  //   // Here we user an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.airline.findAll({
  //     include: [db.User]
  //   }).then(function (dbAirline) {
  //     res.render({airline: dbAirline});
  //   });
  // });

  app.get("/api/user/:id", function (req, res) {
    // Here we user an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.airline.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function (dbairline) {
      res.json(dbairline);
    });
  });

  app.post("/api/airline", function (req, res) { 
    console.log(req.user);
    db.airline.create({
      UserId: req.user.id,
      airlineName: req.body.airlineName,
      departureTime: req.body.departureTime,
      boardingTime: req.body.boardingTime,
      departureGate: req.body.departureGate,
      seatAssignment: req.body.seatAssignment
    }).then(function (dbairline) {
      res.json(dbairline);
    });
  });

  //   app.delete("/api/authors/:id", function(req, res) {
  //     db.Author.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     }).then(function(dbAuthor) {
  //       res.json(dbAuthor);
  //     });
  //   });

  // // route to pull specific hotel accomodation information for a single user
  // app.get("api/index", function (req, res) {
  //   db.Hotel.findOne({
  //     where: {
  //       id: req.params.id
  //     }, include: [db.User]
  //   }).then(function (dbHotel) {
  //     res.json(dbHotel);
  //   });
  // });

  app.post("/api/hotel", function (req, res) {
    db.Hotel.create({
      UserId: req.user.id,
      name: req.body.name,
      address: req.body.address,
      checkin: req.body.checkin,
      checkout: req.body.checkout
    }).then(function (dbHotel) {
      res.json(dbHotel);
    });
  });
};
