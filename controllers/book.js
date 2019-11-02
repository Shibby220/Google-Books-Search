// import our Book model
const db = require("../models");

module.exports = {

  findAll: function(req, res) {
    db
      .Book
      .find(req.query)
      .sort({date: -1})
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  findById: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  create: function (req, res) {
    db.Book
      .create(req.body)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  update: function (req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  remove: function (req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbBookData => dbBookData.remove())
      .then(dbBookData => res.json(dbBookData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
}