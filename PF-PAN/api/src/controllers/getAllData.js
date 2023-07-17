const data  = require("../../Data")
const { Bread, Category,CategoryB } = require("../db.js");
const { Op } = require('sequelize');
const getAllUsers = async(req, res) => {
    const { name } = req.query
    try {
        if (name === "") {
            const allBreadDb = await Bread.findAll({
                include: [
                  { model: CategoryB },
                  { model: Category }  
                ]
              });
            const allBreads= [ ...data,...allBreadDb]
            res.status(200).json(allBreads)
        } else {    
        if (name !== undefined) {
            let searchName = name.toLowerCase()            
            const allBreadDb = await Bread.findAll({
                where: { name: { [Op.iLike]: `%${searchName}%` } },
                include: [
                  { model: CategoryB },
                  { model: Category }  
                ]
              });
            const dataBreadsHost = await data.filter(e => {
                const breadName = e.name?.toLowerCase();
                return breadName.includes(searchName);
            });
            const totalBreads = [...dataBreadsHost, ...allBreadDb]
            if (!totalBreads.length) {
                res.status(400).json({ message: "No se encontraron panes  con este nombre" });
            } else {
                res.status(200).json(totalBreads);
            }
          } else {
            res.status(400).json({ message: "El Parametro que pasaste es indefinido" });
          }
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message })
    }
  };













  const postBread= async (req, res) => {
    const { name, image, ingredients, price,weight,type, description, availability} = req.body;
 
  
    console.log(name, image, ingredients,weight, price, description, availability)
   

    try {
        console.log("entra al try")


        console.log(name, image, ingredients,type, price, description, availability)
        if (!name || !image || !ingredients|| !price|| !type ||!weight || !description || !availability){
            return res.status(400).json({ message: 'faltan datos ' });
          }
        
        const [resp, created] = await Bread.findOrCreate({ where: { name, image, ingredients, price, description, availability} })
       

        if (weight && weight.length) {
            const categorybd = await Category.findAll({ where: { name: weight } });
            console.log(categorybd)
            await resp.setTemperaments(categorybd)

        }
        
        if (type && type.length) {
            const categorybdT = await CategoryB.findAll({ where: { name: type } });
            console.log(categorybd)
            await resp.setTemperaments(categorybdT)

        }




        res.status(200).json(resp);





    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}

  
  
  module.exports = { postBread, getAllUsers};
  

















  