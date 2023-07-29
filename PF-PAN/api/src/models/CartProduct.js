const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('cart_product', { 
    cart_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    underscored: false
  });
};