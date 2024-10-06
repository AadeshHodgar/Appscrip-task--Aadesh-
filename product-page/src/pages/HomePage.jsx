import React, { useState, useEffect } from 'react';
import Filters from '../components/Filter/Filter';
import Product from '../components/Product/Product';
import axios from 'axios';
import './HomePage.css'; 
import Sidebar from "../components/Sidebar/Sidebarr"


const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('All'); 

  useEffect(() => {
    // Fetching products using Axios
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter);

  return (
  //  <div className='hole-page'>
  //   <div className='sidebar-home'>
  //   <Sidebar/>
  //   </div>
     <div className="home-container">
      <Filters filter={filter} setFilter={setFilter} />
      <section className="products">
        {filteredProducts.map((product) => (
        

          <Product key={product.id} name={product.title} price={product.price} image={product.image} />
        ))}
      </section>   
    </div>
  //  </div>
  );
};

export default HomePage;
