module.exports = (sequelize, Sequelize) => {
  const SpreadSheet = sequelize.define("spreadsheet", {
    employee: {
      type: Sequelize.STRING
    },
    monday_rate: {
      type: Sequelize.INTEGER
    },
    monday_hrs: {
      type: Sequelize.INTEGER
    },
    monday_tips: {
      type: Sequelize.INTEGER
    },
    tuesday_rate: {
      type: Sequelize.INTEGER
    },
    tuesday_hrs: {
      type: Sequelize.INTEGER
    },
    tuesday_tips: {
      type: Sequelize.INTEGER
    },
    wednesday_rate: {
      type: Sequelize.INTEGER
    },
    wednesday_hrs: {
      type: Sequelize.INTEGER
    },
    wednesday_tips: {
      type: Sequelize.INTEGER
    },
    thursday_rate: {
      type: Sequelize.INTEGER
    },
    thursday_hrs: {
      type: Sequelize.INTEGER
    },
    thursday_tips: {
      type: Sequelize.INTEGER
    },
    friday_rate: {
      type: Sequelize.INTEGER
    },
    friday_hrs: {
      type: Sequelize.INTEGER
    },
    friday_tips: {
      type: Sequelize.INTEGER
    },
    saturday_rate: {
      type: Sequelize.INTEGER
    },
    saturday_hrs: {
      type: Sequelize.INTEGER
    },
    saturday_tips: {
      type: Sequelize.INTEGER
    },
    sunday_rate: {
      type: Sequelize.INTEGER
    },
    sunday_hrs: {
      type: Sequelize.INTEGER
    },
    sunday_tips: {
      type: Sequelize.INTEGER
    },
    nth_week: {
      type: Sequelize.STRING
    }
  });

  return SpreadSheet;
};
