module.exports = (app) => {
  const countries = require("../controllers/country.controller.js");

  var router = require("express").Router();

  // get all countries
  router.get("/", countries.findAll);

  // Upload new csv
  router.post("/", countries.create);

  app.use("/api/countries", router);
};
