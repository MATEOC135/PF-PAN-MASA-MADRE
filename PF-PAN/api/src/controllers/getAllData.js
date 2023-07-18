const data  = require("../../Data")
const { Bread, CategoryA,CategoryB } = require("../db.js");
const { Op } = require('sequelize');
const getAllUsers = async(req, res) => {
    const { name } = req.query
    try {
        if (name === "") {
            const allBreadDb = await Bread.findAll({
                include: [
                  { model: CategoryB },
                  { model: CategoryA }  
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
                  { model: CategoryA }  
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
            const categorybd = await CategoryA.findAll({ where: { name: weight } });
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




//////////////////////////////////////////////////


const getCategoryType = async (req, res) => {

    const categorybd = await CategoryA.findAll();
    console.log("antes del try")
    try {
        if (categorybd.length === 0) {

            let typeB = [];
            data.forEach(objeto => {
                if (!objeto.hasOwnProperty('type')) {
                    typeB.push("sin tipo especifico  asociado");
                } else {
                    const temperamentosSeparados = objeto.type
                    typeB = typeB.concat(temperamentosSeparados)
                }
            });
            console.log(typeB)

            const typeUnique = Array.from(new Set(typeB));

            console.log(typeUnique);
            const objTypes = typeUnique.map(type1 => ({ name: type1 }))//
            CategoryA.bulkCreate(objTypes)


            const typesCreated = await CategoryA.findAll()

            const typesMap =  typesCreated.map(e => e.name)

            res.status(200).json(typesMap)
        } else {
            console.log("entro al elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
            const categoryName = categorybd.map(e => e.name)
            res.status(200).json(categoryName)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCategoryTypeB = async (req, res) => {

    const categorybd = await CategoryB.findAll();
    console.log("antes del try")
    try {
        if (categorybd.length === 0) {

            let typeB = [];
            data.forEach(objeto => {
                if (!objeto.hasOwnProperty('weight')) {
                    typeB.push("sin tipo especifico  asociado");
                } else {
                    const temperamentosSeparados = objeto.weight
                    typeB = typeB.concat(temperamentosSeparados)
                }
            });
            console.log(typeB)

            const typeUnique = Array.from(new Set(typeB));

            console.log(typeUnique);
            const objTypes = typeUnique.map(type1 => ({ name: type1 }))//aqui creamos un array de objetos a pushear en DIets
            CategoryB.bulkCreate(objTypes) // aqui crea las filas


            const typesCreated = await CategoryB.findAll()

            const typesMap =  typesCreated.map(e => e.name)

            res.status(200).json(typesMap)
        } else {
            console.log("entro al elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
            const categoryName = categorybd.map(e => e.name)
            res.status(200).json(categoryName)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}






const getbreadID = async (req, res) =>{
    const { id } = req.params;
    try {
      const bread = await Bread.findByPk(id.toUpperCase(), {
        
          include: [
                    { model: CategoryB },
                    { model: CategoryA }  
                  ]
       
      });
  
      if (bread) return res.status(200).json(bread);
      return res.status(404).json({
        error: {
          message: "Bread doesn't exist",
          values: { ...req.params },
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: {
          message: "Server error",
        },
      });
    }
  };
  
  module.exports = { postBread, getAllUsers, getCategoryType,getCategoryTypeB,getbreadID};
  

















  