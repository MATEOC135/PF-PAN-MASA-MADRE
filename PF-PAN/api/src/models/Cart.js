const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('cart', {
    id: {
      type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      
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

