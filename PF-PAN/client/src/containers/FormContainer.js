import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [disable, setDisable] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [availability, setAvailability] = useState('true');
  const [weight, setWeight] = useState('');
  const [type, setType] = useState('');
  const [fileInputState, setFileInputState] = useState(''); 

  const preset_key='masaMadre'
  const cloud_name='dgl2qd5oj'

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith('image/')) {
      console.log('Solo se admiten imágenes');
      return;
    }
    setIsUploading(true); 
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);

    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
      setImage(res.data.secure_url); 
      setIsUploading(false);
      setFileInputState('');
    } catch (err) {
      console.log(err);
      setIsUploading(false);
    }
  };

  useEffect(() => {
    const errorObj = findFormErrors();
    setErrors(errorObj);
    setDisable(!!Object.keys(errorObj).length || isUploading);
  }, [name, ingredients, description, price, image, isUploading, availability, weight, type]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage('No se pudo crear el producto');
    } else {
      const newProduct = {
        name,
        availability,
        weight,
        type,
        ingredients: ingredients.split(','),
        description,
        price: `$${price}`,
        image,
      };

      try {
        await axios.post('http://localhost:3001/client', newProduct);
        setName('');
        setIngredients('');
        setDescription('');
        setPrice('');
        setImage(null);
        setAvailability('true');
        setWeight('');
        setType('');
        setErrors({});
        setMessage('Producto creado con éxito');
      } catch (error) {
        setMessage(`Hubo un error al crear el producto: ${error}`);
      }
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
    if (!availability || availability === '') newErrors.availability = 'No puede estar en blanco!';
    if (!weight || weight === '') newErrors.weight = 'No puede estar en blanco!';
    if (!type || type === '') newErrors.type = 'No puede estar en blanco!';
    return newErrors;
  };

  return (
    <div className='container'>
      <div className='divform'>
        <form onSubmit={handleSubmit}>
          <h3 className='title'>Crear nuevo producto</h3>

          <div className='input-div'>
            <label>Nombre: </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" 
              name="name"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className='input-div'>
            <label>Ingredientes: </label>
            <input 
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              type="text" 
              name="ingredients"
            />
            {errors.ingredients && <p>{errors.ingredients}</p>}
          </div>

          <div className='input-div'>
            <label>Descripción: </label>
            <input 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text" 
              name="description"
            />
            {errors.description && <p>{errors.description}</p>}
          </div>

          <div className='input-div'>
            <label>Precio: </label>
            <input 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number" 
              name="price"
            />
            {errors.price && <p>{errors.price}</p>}
          </div>

          <div className='input-div'>
            <label>Disponibilidad: </label>
            <select 
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              name="availability"
            >
              <option value="true">Disponible</option>
              <option value="false">No Disponible</option>
            </select>
            {errors.availability && <p>{errors.availability}</p>}
          </div>

          <div className='input-div'>
            <label>Peso: </label>
            <input 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="text" 
              name="weight"
            />
            {errors.weight && <p>{errors.weight}</p>}
          </div>

          <div className='input-div'>
            <label>Tipo: </label>
            <input 
              value={type}
              onChange={(e) => setType(e.target.value)}
              type="text" 
              name="type"
            />
            {errors.type && <p>{errors.type}</p>}
          </div>

          <div className='input-div'>
            <label className='image'>Imagen: </label>
            <input 
              onChange={handleImageChange}
              type="file" 
              name="image"
              accept="image/*"
              value={fileInputState}
            />
            {errors.image && <p>{errors.image}</p>}
          </div>

          {message && <div>{message}</div>}

          <div>
            <button 
              className={disable || isUploading ? 'button' : 'button-enabled'} 
              type="submit" 
              disabled={disable || isUploading}
            >
              Crear
            </button>
            {message && <p>{message}</p>}
          </div>

        </form>
      </div>
    </div>
  );
};

export default FormContainer;
