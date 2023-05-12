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
    rate: req.body.rate,
    hrs: req.body.hrs,
    tips: req.body.tips,
    s_date: req.body.s_date,
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
  const s_date = req.query.s_date;
  var condition = s_date ? { s_date: { [Op.iLike]: `%${s_date}%` } } : null;

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
  const s_date = req.params.s_date;

  SpreadSheet.update(req.body, {
    where: { s_date: s_date }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "SpreadSheet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update SpreadSheet with Date=${s_date}. Maybe SpreadSheet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating SpreadSheet with Date=" + s_date
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
