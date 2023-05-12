module.exports = app => {
  const spreadsheets = require("../controllers/controller.js");

  var router = require("express").Router();

  // Create a new SpreadSheet
  router.post("/", spreadsheets.create);

  // Retrieve all SpreadSheets
  router.get("/", spreadsheets.findAll);

  // Retrieve a single SpreadSheet with id
  router.get("/:id", spreadsheets.findOne);

  // Update a SpreadSheet with id
  router.put("/:id", spreadsheets.update);

  // Delete a SpreadSheet with id
  router.delete("/:id", spreadsheets.delete);

  // Delete all SpreadSheets
  router.delete("/", spreadsheets.deleteAll);

  app.use("/api/spreadsheets", router);
};
