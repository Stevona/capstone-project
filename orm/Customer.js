const { DataTypes } = require('sequelize');
const connection = require('./db-connection');

const Customer = connection.define('Customer', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middleName: {
        type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{ type: DataTypes.STRING, allowNull: false },
    address:{ type: DataTypes.STRING, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    region: { type: DataTypes.STRING, allowNull: false },
    zip: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    customerNotes: { type: DataTypes.STRING },
    customerId: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      autoIncrement: true, 
      primaryKey: true 
    }
  });

  module.exports = Customer ;