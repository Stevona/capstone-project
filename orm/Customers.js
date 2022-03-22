const { DataTypes } = require('sequelize');
const connection = require('./db-connection');

const Customers = connection.define('Customers', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{ type: DataTypes.STRING, allowNull: false},
    address:{ type: DataTypes.STRING, allowNull: false},
    city: { type: DataTypes.STRING, allowNull: false},
    region: { type: DataTypes.STRING, allowNull: false},
    zip: { type: DataTypes.STRING, allowNull: false},
    customerNotes: { type: DataTypes.STRING, allowNull: false},
    customerId: { type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true}
  });
  
  module.exports = Customers;