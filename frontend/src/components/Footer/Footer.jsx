//import React from 'react'
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          Dress your family in style without breaking the bank! Trendy wear at affordable prices, delivered right to your doorstep. Shop smart, stay trendy!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon}  alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+94 70 158 3691</li>
                <li>styleStach@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © StyleStash.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
