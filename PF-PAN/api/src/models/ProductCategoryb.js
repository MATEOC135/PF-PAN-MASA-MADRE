const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product_categoryB', {
    bread_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    categoryb_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    underscored: false
  });
};