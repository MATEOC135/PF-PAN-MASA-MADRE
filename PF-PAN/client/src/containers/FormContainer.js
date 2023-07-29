// FormContainer.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormContainer.css';

const FormContainer = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage('No se pudo crear el producto');
    } else {
      const newProduct = {
        name,
        ingredients,
        description,
        price,
        image
      };

      dispatch(addProduct(newProduct));

      setName('');
      setIngredients('');
      setDescription('');
      setPrice('');
      setImage(null);
      setErrors({});
      setMessage('Producto creado con éxito');
    }

    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const findFormErrors = () => {
    const newErrors = {};

    if (!name || name === '') newErrors.name = 'No puede estar en blanco!';
    if (!ingredients || ingredients === '') newErrors.ingredients = 'No puede estar en blanco!';
    if (!description || description === '') newErrors.description = 'No puede estar en blanco!';
    if (!price || price === '' || price <= 0) newErrors.price = 'Debe ser mayor que cero!';
    if (!image) newErrors.image = 'Debe subir una imagen!';

    return newErrors;
  };

  return (
    <div className='divform'>
      <form onSubmit={handleSubmit}>
        <h3 className='title'>Crear nuevo producto</h3>
        <div className='input-div'>
          <label className='name'>Nombre: </label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre..."
            type="text" 
            name="names"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='input-div'>
          <label className='ingredients'>Ingredientes: </label>
          <input 
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredientes..."
            type="text" 
            name="ingredients"
          />
          {errors.ingredients && <p>{errors.ingredients}</p>}
        </div>
        <div className='input-div'>
          <label className='description'>Descripcion: </label>
          <input 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripcion..."
            type="text" 
            name="description"
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div className='input-div'>
          <label className='price'>Precio sugerido: </label>
          <input 
            value={price}
            onChange={(e) => {
              
              if (!isNaN(e.target.value) && e.target.value >= 0) {
                setPrice(e.target.value)
              }
            }}
            placeholder="Precio..."
            type="number" 
            min="0"
            name="price"
          />
          {errors.price && <p>{errors.price}</p>}
        </div>
        <div className='input-div'>
          <label className='image'>Imagen: </label>
          <input 
            onChange={handleImageChange}
            type="file" 
            accept="image/*"
            name="image"
          />
          {errors.image && <p>{errors.image}</p>}
        </div>
        <button className='button' type="submit">Crear</button>
        {message && <p>{message}</p>}
      </form> 
    </div>
  );
};

export default FormContainer;
