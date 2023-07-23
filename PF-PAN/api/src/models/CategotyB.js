const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('weight', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    timestamps: false,
    underscored: false, 
  });
};