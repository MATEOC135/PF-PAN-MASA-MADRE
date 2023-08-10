const data  = require("../../Data")
const { Bread, Type,Weight } = require("../db.js");
const { Op } = require('sequelize');
////////////////////////////////////////////  Get all User ///////////////////////////////////////////
const getAllUsers = async(req, res) => {
    const { name } = req.query
    try {
        if (name === "" || name === undefined) {
            const allBreadDb = await Bread.findAll();
              console.log(allBreadDb, "esta es la data bd")
            const allBreads= [...allBreadDb]
            console.log
            res.status(200).json(allBreads)
        } else {    
        if (name !== undefined) {
            let searchName = name.toLowerCase()            
            const allBreadDb = await Bread.findAll({
                where: { name: { [Op.iLike]: `%${searchName}%` } }
              });
           
            const dataBreadsHost = await allBreadDb.filter(e => {
                const breadName = e.name?.toLowerCase();
                return breadName.includes(searchName);
            });
            const totalBreads = [...dataBreadsHost]
            if (!totalBreads.length) {
              res.status(200).json({ message: "Pan no encontrado" });
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
        const [resp, created] = await Bread.findOrCreate({ where: {  name, image, ingredients, price,weight,type, description, availability} })
        console.log("entra al try")
        console.log(resp)
        res.status(200).json(resp);
    } catch (error) {
    console.log("entra al catch")
    res.status(400).json({ error: error.message })
    }
}

/////////////////////////////////////////// DETAIL ID /////////////////////////////////////////////
const getbreadID = async (req, res) =>{
    const { id } = req.params;

    try {
   
      const bread = await Bread.findByPk(id.toUpperCase());
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
      
      if (!Array.isArray(data) || data.length === 0) {
        return res.status(400).json({ message: 'Cuerpo de solicitud inválido' });
      }
  
      const allbd = await Bread.findAll();
      if (allbd.length > 0) {
        return res.status(200).json({ message: 'Base de datos ya cargada' });
      }
  
      const createdBreads = await Promise.all(data.map(async (e) => {
        try {
          const { name, image, ingredients, price, weight, type, description, availability } = e;
  
          if (!name || !image || !ingredients || !price || !type || !weight || !description || !availability) {
            return null;
          }
  
          const ingredientsString = Array.isArray(ingredients) ? ingredients.join(', ') : '';
  
          const [resp] = await Bread.findOrCreate({
            where: { name, image, ingredients: ingredientsString, type, weight, price, description, availability }
          });
  
          return resp;
        } catch (error) {
          console.error('Error al insertar datos:', error);
          return null;
        }
      })); 
  
      const createdBreadsWithoutNulls = createdBreads.filter(item => item !== null);
  
      if (createdBreadsWithoutNulls.length > 0) {
        res.status(201).json({ message: 'Datos insertados correctamente',cantidaddata:data.length,cantidad: createdBreads.length, createdBreads: createdBreadsWithoutNulls });
      } else {
        res.status(400).json({ message: 'No se pudieron insertar los datos' });
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      res.status(500).json({ error: 'Ocurrió un error al procesar la solicitud' });
    }
  };
  module.exports = { postBread, getAllUsers, getbreadID, postBreadData};
  

















  