import React from 'react';
import './Filter.css'; 

const Filters = ({ filter, setFilter }) => {
  const categories = ['All', 'Men', 'Women', 'Baby & Kids'];

  return (
    <div className="filters">
      {/* <h2>Filters</h2>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default Filters;
