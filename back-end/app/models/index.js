const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
      host: config.HOST,
      dialect: config.dialect,
      operatorsAliases: false,
  
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      }
    }
  );

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const User=require("./user.model.js")(sequelize, Sequelize);
const Stream=require("./stream.model.js")(sequelize, Sequelize);
Stream.belongsTo(User,{foreignKey: 'user_id'});
db.user = User;
db.stream=Stream;
module.exports = db;