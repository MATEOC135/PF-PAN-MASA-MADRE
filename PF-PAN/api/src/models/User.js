const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
      },
    admin: {
        type: DataTypes.STRING,
        allowNull: false
      },
  }, {
    timestamps: false,
    underscored: false, 
  });
};

