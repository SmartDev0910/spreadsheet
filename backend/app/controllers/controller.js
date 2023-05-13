const db = require("../models");
const SpreadSheet = db.spreadsheet;
const Op = db.Sequelize.Op;

// Create and Save a new SpreadSheet
exports.create = (req, res) => {
  // Validate request
  if (!req.body.employee) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a SpreadSheet
  const spreadsheet = {
    employee: req.body.employee,
    monday_rate: req.body.monday_rate,
    monday_hrs: req.body.monday_hrs,
    monday_tips: req.body.monday_tips,
    tuesday_rate: req.body.tuesday_rate,
    tuesday_hrs: req.body.tuesday_hrs,
    tuesday_tips: req.body.tuesday_tips,
    wednesday_rate: req.body.wednesday_rate,
    wednesday_hrs: req.body.wednesday_hrs,
    wednesday_tips: req.body.wednesday_tips,
    thursday_rate: req.body.thursday_rate,
    thursday_hrs: req.body.thursday_hrs,
    thursday_tips: req.body.thursday_tips,
    friday_rate: req.body.friday_rate,
    friday_hrs: req.body.friday_hrs,
    friday_tips: req.body.friday_tips,
    saturday_rate: req.body.saturday_rate,
    saturday_hrs: req.body.saturday_hrs,
    saturday_tips: req.body.saturday_tips,
    sunday_rate: req.body.sunday_rate,
    sunday_hrs: req.body.sunday_hrs,
    sunday_tips: req.body.sunday_tips,
    nth_week: req.body.nth_week,
  };

  // Save SpreadSheet in the database
  SpreadSheet.create(spreadsheet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SpreadSheet."
      });
    });
};

// Retrieve all SpreadSheets from the database.
exports.findAll = (req, res) => {
  const nth_week = req.query.nth_week;
  var condition = nth_week ? { nth_week: { [Op.iLike]: `%${nth_week}%` } } : null;

  SpreadSheet.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving SpreadSheets."
      });
    });
};

// Find a single SpreadSheet with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  SpreadSheet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving SpreadSheet with id=" + id
      });
    });
};

// Update a SpreadSheet by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  console.log(id, req.body)
  SpreadSheet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SpreadSheet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SpreadSheet with Date=${id}. Maybe SpreadSheet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SpreadSheet with Date=" + id
      });
    });
};

// Delete a SpreadSheet with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  SpreadSheet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SpreadSheet was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete SpreadSheet with id=${id}. Maybe SpreadSheet was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete SpreadSheet with id=" + id
      });
    });
};

// Delete all SpreadSheets from the database.
exports.deleteAll = (req, res) => {
  SpreadSheet.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} SpreadSheets were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all SpreadSheets."
      });
    });
};
