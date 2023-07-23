const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('bread', {
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
    image: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    ingredients: {
      type:DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    availability: {
        type: DataTypes.STRING,
        allowNull: false
      },
/*    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    categoryb_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
       */
  }, {
    timestamps: false,
    underscored: false, 
  });
};

