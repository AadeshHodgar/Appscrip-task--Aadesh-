import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faPaypal, faApplePay } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="subscribe-container">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <input type="email" placeholder="Enter your e-mail" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="footer-icons">
          <FontAwesomeIcon icon={faCcVisa} className="icon" />
          <FontAwesomeIcon icon={faCcMastercard} className="icon" />
          <FontAwesomeIcon icon={faPaypal} className="icon" />
          <FontAwesomeIcon icon={faApplePay} className="icon" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 mettā muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
