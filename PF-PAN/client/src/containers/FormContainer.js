import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './NavigationBar.css'

const FormContainer = () => {
  return (
    <div >
        <div>
            <h3>Crea el pan que te guste</h3>
            <form>
              
              <div >
                <div >
                    <label>-Nombre:</label>
                    <input 
                    placeholder="Name..."
                    type="text" 
                    name="names"
                    />
                </div>
                <div >
                    <label>-Ingredientes:</label>
                    <input 
                    placeholder="Ingredientes..."
                    type="text" 
                    name="names"
                    />
                </div>
                <div >
                    <label>-Descripcion</label>
                    <input 
                    placeholder="Descripcion..."
                    type="text" 
                    name="names"
                    />
                </div>
                  
                     

      
    </div>
    </form> 
    </div >
        </div>
  );
};

export default FormContainer;
