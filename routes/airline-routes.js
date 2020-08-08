var db = require("../models");

module.exports = function(app) {
  app.get("/api/index", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.airline.findAll({
      include: [db.Post]
    }).then(function(dbAirline) {
      res.json(dbAirline);
    });
  });

  app.get("/api/add/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.airline.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbairline) {
      res.json(dbairline);
    });
  });

  app.post("/api/add", function(req, res) {
    db.airline.create({
            airline: req.body.airline,
            departureTime: req.body.departureTime,
            boardingTime: req.body.boardingTime,
            departureGate: req.body.departureGate,
            seatAssignment: req.body.seatAssignment,
        }).then(function(dbairline) {
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

};
