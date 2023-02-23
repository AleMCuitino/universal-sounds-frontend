import React, { useState } from 'react';

function ButtonAdd() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('');
  
    const addProduct = () => {
      if (newProduct.trim() !== '') {
        setProducts([...products, newProduct]);
        setNewProduct('');
      }
    };
  
    return (
      <div>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newProduct}
          onChange={event => setNewProduct(event.target.value)}
        />
        <button  className= "ButtonAdd" onClick={addProduct}>Añadir</button>
      </div>
    );
  }
  
  export default ButtonAdd;
  