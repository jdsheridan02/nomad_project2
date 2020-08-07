const db = require("../models");

module.exports = function(app) {
// route to pull specific hotel accomodation information for a single user
    app.get("api/index", function(req, res) {
        db.Hotel.findOne({
            where: {
                id: req.params.id
            }, include: [db.User]
        }).then(function(dbHotel) {
            res.json(dbHotel);
        });
    });

    app.post("/api/add", function(req, res) {
        db.Hotel.create({
            name: req.body.name,
            address: req.body.address,
            checkin: req.body.checkin,
            checkout: req.body.checkout
        }).then(function(dbHotel) {
          res.json(dbHotel);
        });
      });
}