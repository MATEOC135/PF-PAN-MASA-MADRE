const {  Bread,Cart, CategoryA, CategoryB, User , Cart_product, Product_category } = require('../db');

const creadorGetProduct = async ({name, image, ingredients, price, description, availability,product }) => {
   console.log(name, image, ingredients, price, description, availability);
    try {
     // const { name, image, ingredients, price, description, availability } = data;
        const bread = await Bread.findOne({
          where: { name }
        });
        let createdBread;
        if (!(bread instanceof Bread)) {
            createdBread = await Bread.create({
                name, 
                image, 
                ingredients, 
                price, 
                description, 
                availability
          });
        }
        let foundProduct = [];
        for (let name of product) {
          const products = await Bread.findOne({
            where: {name : name }
          });
          foundProduct.push(products);
        }
        if (bread instanceof User) {
          await bread.createdBread(foundProduct);
        } else {
          await bread.createdBread(foundProduct);
        }
        return createdBread;
      } catch (error) {
        throw new Error(error.message);
      }
};

module.exports = { creadorGetProduct };