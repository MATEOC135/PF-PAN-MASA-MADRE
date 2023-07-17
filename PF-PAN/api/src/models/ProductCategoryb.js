const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product_categoryB', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoryB_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    underscored: false
  });
};