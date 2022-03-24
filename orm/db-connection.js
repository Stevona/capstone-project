//use sequelize to access mysql database
const { Sequelize } = require('sequelize');

const connString = process.env.MYSQLCONNSTR_firstTest;
console.log(process.env);
// protocol://user:password@server:port/databaseName
const connection = new Sequelize(
  connString,
  {
    define:{ timestamps: false }
  }
);

module.exports = connection;