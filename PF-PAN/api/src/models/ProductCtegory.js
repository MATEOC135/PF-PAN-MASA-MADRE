const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product_category', {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    underscored: false
  });
};