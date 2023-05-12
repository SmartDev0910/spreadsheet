module.exports = (sequelize, Sequelize) => {
  const SpreadSheet = sequelize.define("spreadsheet", {
    employee: {
      type: Sequelize.STRING
    },
    rate: {
      type: Sequelize.INTEGER
    },
    hrs: {
      type: Sequelize.INTEGER
    },
    tips: {
      type: Sequelize.INTEGER
    },
    s_date: {
      type: Sequelize.DATE
    }
  });

  return SpreadSheet;
};
