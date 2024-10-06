import React from 'react';
import './Product.css';
const Product = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button>Sign in or Create an account to see pricing</button>
    </div>
  );
};

export default Product;
