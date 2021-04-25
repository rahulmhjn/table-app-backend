const db = require("../models");
const Country = db.country;

exports.create = (req, response) => {
  Country.collection
    .drop()
    .then(() => {
      Country.insertMany(req.body.countries)
        .then(function (docs) {
          response.json(docs);
        })
        .catch(function (err) {
          response.status(500).send(err);
        });
    })
    .catch(function (err) {
      response.status(500).send(err);
    });
};

exports.findAll = (req, res) => {
  Country.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
