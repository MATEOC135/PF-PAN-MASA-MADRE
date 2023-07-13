const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('cart', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    totalOrder: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: true,
    underscored: false, 
  });
};

