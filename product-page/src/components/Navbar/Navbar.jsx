import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Custom CSS

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUser, faAngleLeft, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.dropdown-options');
      if (dropdown && !dropdown.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Top Header Section */}
      <div className="top-header">
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
      </div>

      {/* Main Navbar Section */}
      <nav className="navbar">
        <div className="center-logo">
          <h1>LOGO</h1> {/* Centered logo above the navbar */}
        </div>
        <ul className="nav-links">
          <li><b>SHOP</b></li>
          <li><b>SKILLS</b></li>
          <li><b>STORIES</b></li>
          <li><b>ABOUT</b></li>
          <li><b>CONTACT US</b></li>
        </ul>
        <div className="navbar-icons">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUser} />
          <div className="dropdown">
            <button className="dropbtn">ENG</button>
            <div className="dropdown-content">
              {/* <a href="#">ENG</a>
              <a href="#">FR</a>
              <a href="#">SP</a> */}
            </div>
          </div>
        </div>
      </nav>
    
      {/* Discover Section */}
      <div className="discover">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, maiores! Amet est posuere rhoncus scelerisque.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, corrupti?</p>
      </div>

      {/* Items Section */}
      <div className="items-section">
        <span><b>3425 ITEMS</b></span>
        <div className="hide-filter">
          <FontAwesomeIcon icon={faAngleLeft} />
          <a href="#">HIDE FILTER</a>
        </div>
        <div className="recommended">
          <a href="#" onClick={toggleDropdown} className="recommended-link">
            <b>RECOMMENDED</b>
            <FontAwesomeIcon icon={showDropdown ? faAngleUp : faAngleDown} className="dropdown-arrow" />
          </a>
          {showDropdown && (
            <div className="dropdown-options">
              <ul>
                <li>Newest first</li>
                <li>Popular</li>
                <li>Price: high to low</li>
                <li>Price: low to high</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
