import { useDispatch } from 'react-redux';
import { addProduct, getProducts } from '../actions/productActions';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allBreads } from '../reducers/cartReducer';

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
  const [weight, setWeight] = useState('Seleccione una opcion');
  const [type, setType] = useState('Seleccione una opcion');
  const [fileInputState, setFileInputState] = useState(''); 
  const dispatch = useDispatch();

  const preset_key='masaMadre';
  const cloud_name='dgl2qd5oj';


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith('image/')) {
      setMessage('Only images are allowed');
      return;
    }
    setIsUploading(true); 
    setMessage('Loading image...');
  
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_key);
  
    try {
      const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
      const imageUrl = res.data.secure_url;
      setImage(imageUrl);
      setFileInputState('');  
      setIsUploading(false);
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors.image; 
        return newErrors;
      });
      setMessage('Image uploaded successfully');
    } catch (err) {
      console.log(err);
      setIsUploading(false);
      setMessage('There was a problem loading the image');
    }
  };
  
  
  

  const findFormErrors = () => {
    const newErrors = {};
    if (!name || name === '') newErrors.name = 'Can not be blank!';

    if (!ingredients || ingredients === '') newErrors.ingredients = 'Can not be blank!';

    if (!description || description === '') newErrors.description = 'Can not be blank!';

    if (!price || price === '' || price <= 0) newErrors.price = 'Must be greater than zero!';
    
    if (!image) newErrors.image = 'You must upload an image!';
    if (!availability || availability === '') newErrors.availability = 'Can not be blank!';
    if (!weight || weight === '') newErrors.weight = 'Can not be blank!';
    if (!type || type === '') newErrors.type = 'Can not be blank!';
    return newErrors;
  };

  useEffect(() => {
    const errorObj = findFormErrors();
    setErrors(errorObj);
    setDisable(!!Object.keys(errorObj).length || isUploading);
  }, [name, ingredients, description, price, image, isUploading, availability, weight, type]);
  
  const handleSubmit = (event) => {

    event.preventDefault();
    const newErrors = findFormErrors();
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessage('Could not create product');
    } else {
      const newProduct = {
        name,
        availability,
        weight,
        type,      
        ingredients,
        description,
        price,
        image,
      };

  
      axios.post('https://pan-4dg1.onrender.com/client', newProduct)
        .then(() => {
          dispatch(addProduct(newProduct));
          return axios.get(`https://pan-4dg1.onrender.com/client?name=${name}`)
        })
        .then(response => {
          dispatch(getProducts(response.data));
          setName('');
          setIngredients('');
          setDescription('');
          setPrice('');
          setImage(null);
          setAvailability('true');
          setWeight('');
          setType('');
          setErrors({});
          setMessage('product created successfully');
        })
        .catch(error => {
          setMessage(`There was an error creating the product: ${error}`);
        });

    }

    setTimeout(() => {
      dispatch(allBreads(""))
    }, 1800);
  
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };


  return (
    <div className='container'>
      <div className='divform'>
        <form onSubmit={handleSubmit}>
          <h3 className='title'>Create new product</h3>

          <div className='input-div'>
            <label>Name: </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" 
              name="name"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className='input-div'>
            <label>Ingredients: </label>
            <input 
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              type="text" 
              name="ingredients"
            />
            {errors.ingredients && <p>{errors.ingredients}</p>}
          </div>

          <div className='input-div'>
            <label>Description: </label>
            <input 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text" 
              name="description"
            />
            {errors.description && <p>{errors.description}</p>}
          </div>

          <div className='input-div'>
            <label>Availability: </label>
            <select 
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              name="availability"
            >
              <option value="true">Availability</option>
              <option value="false">NoT availability</option>
            </select>
            {errors.availability && <p>{errors.availability}</p>}
          </div>

          <div className='input-div'>
            <label>Bread Weight: </label>
            <select value={weight} onChange={(e) => setWeight(e.target.value)} name="weight">
              <option value="Seleccione una opcion">Select an option</option>
              <option value="1kg">1kg</option>
              <option value="1.5kg">1.5kg</option>
              <option value="2kg">2kg</option>
            </select>
            {errors.weight && <p>{errors.weight}</p>}
          </div>

          <div className='input-div'>
            <label>Bread Type: </label>
            <select value={type} onChange={(e) => setType(e.target.value)} name="type">
              <option value="Seleccione una opcion">Select an option</option>
              <option value="salty">Salty</option>
              <option value="sweet">Sweet</option>
              <option value="integral">Integral</option>
            </select>
            {errors.type && <p>{errors.type}</p>}
          </div>

          <div className='input-div'>
            <label>Price: </label>
            <input 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number" 
              name="price"
            />
            {errors.price && <p>{errors.price}</p>}
          </div>

      

          <div className='input-div'>
    <label className='image' htmlFor="fileUpload">Image: </label>
    <input 
        id="fileUpload"
        onChange={handleImageChange}
        type="file" 
        name="image"
        accept="image/*"
        value={fileInputState}
        style={{display: "none"}}
    />
    <button 
        type="button"
        onClick={() => document.getElementById("fileUpload").click()}
    >
        {image ? 'Archivo seleccionado' : 'Seleccione un archivo'}
    </button>
    {errors.image && <p>{errors.image}</p>}
    {image && <img src={image} alt="Previsualización de imagen cargada" />}
</div>



          <button disabled={disable} className={disable ? 'submit-button-disabled' : 'submit-button'} type='submit'>Create Product</button>
          {message && <div>{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default FormContainer;