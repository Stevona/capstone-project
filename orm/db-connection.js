//use sequelize to access mysql database
const { Sequelize } = require('sequelize');

/* const connString = process.env.MYSQLCONNSTR_officialstonecapDatabase;

// protocol://user:password@server:port/databaseName
const connection = new Sequelize(
  connString,
  {
    define:{ timestamps: false }
  }
); */

const connection = new Sequelize(process.env.DATABASE_NAME, process.env.USER_NAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql',
  define : {
    timestamps : false
  }
})


module.exports = connection;
