require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,DB_DEPLOY 
} = process.env;

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialectOptions:{
    ssl:{
      require: true,
    },
  },
});
const basename = path.basename(__filename);
 
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Bread,Cart, Type, User , Cart_product,  Weight } = sequelize.models;
/* console.log(Bread,Cart, Type, User , Cart_product, Product_category  )
console.log("aaaaaaaaaaaaaaa-----------aaaaaaaaaaaa") */
// Relación uno a muchos: User - Cart
User.hasMany(Cart, { foreignKey: 'user_id' });
Cart.belongsTo(User, { foreignKey: 'user_id' });

// Relación muchos a muchos: Cart - Product
Cart.belongsToMany(Bread, { through: Cart_product, foreignKey: 'cart_id' });
Bread.belongsToMany(Cart, { through: Cart_product, foreignKey: 'bread_id' });

// Relación muchos a muchos: Bread - Type
Bread.belongsToMany(Type, { through: 'BreadCategory' });
Type.belongsToMany(Bread, { through: 'BreadCategory' });

// Relación muchos a muchos: Bread - Weight
Bread.belongsToMany(Weight, { through: 'BreadCategoryB' });
Weight.belongsToMany(Bread, { through: 'BreadCategoryB' });

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
