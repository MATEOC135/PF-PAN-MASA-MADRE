const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('bread', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1000),
      allowNull: false
      
    },
    ingredients: {
      type:DataTypes.STRING(1000),
      allowNull: false
    },
    price: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    availability: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },
    type: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },
    weight: {
        type: DataTypes.STRING(1000),
        allowNull: false
      },

  }, {
    timestamps: false,
    underscored: false, 
  });
};

