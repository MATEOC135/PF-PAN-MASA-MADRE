const { Router } = require('express');
const { Bread,Cart, CategoryA, CategoryB, User , Cart_product, Product_category } = require('../db.js'); 
const {creadorGetProduct} = require('../handlers/handlersPostProduct.js');
const {product} = require ("../data.js"); 
const router = Router();

router.get('/', async (req, res) => { 
    try { 
        // Buscar todas las actividades en la base de datos 
        console.log(product)
       const allProduct = await Bread.findAll({ 
              
       }) 
       // Devolvemos las acitividades encontradas como respuesta 
       res.status(200).json(allProduct) 
    } catch (error) { 
       res.status(400).json({ error: "No se encontraron actividades" }) 
    } 
 
 }); 

router.post("/", async (req,res,next) => { 
    try { 
         // Crear una nuevo producto utilizando los datos recibidos en el cuerpo de la solicitud 
        const response = await creadorGetProduct(req.body); 
        res.status(201).json({ 
            status: 'Se ha creado exitosamente' 
        }) 
 
    } catch (error) { 
 
        res.status(400).json({error: 'error en la creacion'}) 
        next(error) 
    } 
}) 
 

module.exports = router;