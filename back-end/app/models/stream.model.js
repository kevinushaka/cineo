module.exports = (sequelize, Sequelize) => {
    const Stream = sequelize.define("streams", {
      name: {
        type: Sequelize.STRING
      },
      src: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: false
  });
  
    return Stream;
  };