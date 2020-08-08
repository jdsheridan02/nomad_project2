// // Requiring path to so we can use relative routes to our HTML files
// const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/add");
    }
    res.render("./landing");
  });

  // app.get("/login", (req, res) => {
  //   // If the user already has an account send them to the add page
  //   // if (req.user) {
  //   //   res.redirect("/login");
  //   // }
  //   res.render("./login");
  // });

  app.get("/add", (req, res) => {
    // If the user already has an account send them to the add page
    // if (req.user) {
    //   res.redirect("/add");
    // }
    res.render("./add");
  });

  app.get("/index", (req, res) => {
    // If the user already has an account send them to the add page
    // if (req.user) {
    //   res.redirect("/add");
    // }
    res.render("./index");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("/add");
    }
    res.render("login");
  });
};
