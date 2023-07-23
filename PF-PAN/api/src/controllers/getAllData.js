const data  = require("../../Data")
const { Bread, Type,Weight } = require("../db.js");
const { Op } = require('sequelize');
////////////////////////////////////////////  Get all User ///////////////////////////////////////////
const getAllUsers = async(req, res) => {
    const { name } = req.query
    try {
        if (name === "") {
            const allBreadDb = await Bread.findAll({
                include: [
                  { model: Weight },
                  { model: Type }  
                ]
              });
              console.log(allBreadDb, "esta es la data bd")
            const allBreads= [ ...data,...allBreadDb]
            console.log
            res.status(200).json(allBreads)
        } else {    
        if (name !== undefined) {
            let searchName = name.toLowerCase()            
            const allBreadDb = await Bread.findAll({
                where: { name: { [Op.iLike]: `%${searchName}%` } },
                include: [
                  { model: Weight },
                  { model: Type }  
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
  ///////////////////////////////// POST BREAD///////////////////////////////////////////////
  const postBread= async (req, res) => {
    const { name, image, ingredients, price,weight,type, description, availability} = req.body;
 
  


    try {
     
        if (!name || !image || !ingredients|| !price|| !type ||!weight || !description || !availability){
            return res.status(400).json({ message: 'faltan datos ' });
          }

          const ingredientsString = Array.isArray(ingredients) ? ingredients.join(', ') : '';

        
        const [resp, created] = await Bread.findOrCreate({ where: { name, image, ingredients: ingredientsString, price, description, availability} })
        console.log("entra al try")

        if (weight && weight.length) {
            const categorybd = await Type.findAll({ where: { name:type } });
            console.log("aqui va processsssssssssssssssss")
            console.log(categorybd)
            await resp.addType(categorybd)

        }
        console.log("entra al try")
 
        if (type && type.length) {
            const categorybdT = await Weight.findAll({ where: { name:weight } });
            console.log(categorybdT)
            await resp.addWeight(categorybdT)

        }
        console.log(resp)



        res.status(200).json(resp);





    } catch (error) {

      console.log("entra al catch")
      
        res.status(400).json({ error: error.message })

    }

}




////////////////////////////////////////////////// CATEGORY TYPE ////////////////////////////////////////


const getCategoryType = async (req, res) => {

    const categorybd = await Type.findAll();
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
            Type.bulkCreate(objTypes)


            const typesCreated = await Type.findAll()

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

    const categorybd = await Weight.findAll();
    console.log("antes del try")
    try {
        if (categorybd.length === 0) {

            let typeB = [];
            data.forEach(objeto => {
                if (!objeto.hasOwnProperty('weight')) {
                    typeB.push("sin tipo especifico  asociado");
                } else {
                    const weight1 = objeto.weight
                    typeB = typeB.concat(weight1)
                }
            });
            console.log(typeB)

            const typeUnique = Array.from(new Set(typeB));

            console.log(typeUnique);
            const objTypes = typeUnique.map(type1 => ({ name: type1 }))//aqui creamos un array de objetos a pushear en DIets
            Weight.bulkCreate(objTypes) // aqui crea las filas


            const typesCreated = await Weight.findAll()

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





/////////////////////////////////////////// DETAIL ID /////////////////////////////////////////////
const getbreadID = async (req, res) =>{
    const { id } = req.params;

    try {
   
      const bread = await Bread.findByPk(id.toUpperCase(), {
        
          include: [
                    { model: Weight },
                    { model: Type }  
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










  const postBreadData = async (req, res) => {
    try {
     
  
      for (const bread of data) {
        const { name, image, ingredients, price, weight, type, description, availability } = bread;
  
        if (!name || !image || !ingredients || !price || !type || !weight || !description || !availability) {
          return res.status(400).json({ message: 'Faltan datos obligatorios.' });
        }
  
        const ingredientsString = Array.isArray(ingredients) ? ingredients.join(', ') : ingredients;
  
        const [resp, created] = await Bread.findOrCreate({
          where: { name, image, ingredients: ingredientsString, price, description, availability }
        });
  
        if (weight && weight.length) {
          const categorybd = await Type.findAll({ where: { name: type } });
          await resp.addType(categorybd);
        }
  
        if (type && type.length) {
          const categorybdT = await Weight.findAll({ where: { name: weight } });
          await resp.addWeight(categorybdT);
        }
      }
  
      res.status(200).json("Datos creados exitosamente.");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports = { postBread, getAllUsers, getCategoryType,getCategoryTypeB,getbreadID, postBreadData};
  

















  