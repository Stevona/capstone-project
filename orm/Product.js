const { DataTypes } = require('sequelize');
const connection = require('./db-connection');

const Product = connection.define('Product', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      auto_increment: true,
      primaryKey: true
    },
    productSKU: { type: DataTypes.STRING, allowNull: false },
    productPrice: { type: DataTypes.DECIMAL, allowNull: false },
    productName: { type: DataTypes.STRING, allowNull: false },
    productQuantity:{ type: DataTypes.INTEGER, allowNull: false },
    productDescription:{ type: DataTypes.STRING, allowNull: true },
  });
  
  module.exports = Product;
