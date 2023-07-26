import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormContainer.css';




const FormContainer = () => {
  return (
    <div >
        <div className='divform'>
            <form>
             <h3 className='title'>Crear nuevo producto</h3>
              <div >
                <div >
                    <label className='name'>Nombre: </label>
                    <input 
                    placeholder="Name..."
                    type="text" 
                    name="names"
                    />
                </div>
                <div >
                    <label className='Ingredients'>Ingredientes: </label>
                    <input 
                    placeholder="Ingredientes..."
                    type="text" 
                    name="names"
                    />
                </div>
                <div >
                    <label className='description'>Descripcion: </label>
                    <input 
                    placeholder="Descripcion..."
                    type="text" 
                    name="names"
                    />
                </div>
                <div >
                    <label className='price'>Precio sugerido: </label>
                    <input 
                    placeholder="Precio..."
                    type="text" 
                    name="names"
                    />
                </div>
                  <button className='button'>Crear</button>
                     

      
    </div>
    </form> 
    </div >
        </div>
  );
};

export default FormContainer;
