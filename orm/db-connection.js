//use sequelize to access mysql database
const { Sequelize } = require('sequelize');

const config = require('./db-config');

// protocol://user:password@server:port/databaseName
const connection = new Sequelize(

  `mysql://${config.userName}:${config.password}@localhost:3306/${config.database}`,
  {
    define:{timestamps: false}
  }
);

module.exports = connection;
