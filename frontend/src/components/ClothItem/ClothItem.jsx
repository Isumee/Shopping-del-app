/* eslint-disable react/prop-types */
//import React from 'react'
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./ClothItem.css";
import { StoreContext } from "../../context/StoreContex";

const ClothItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="cloth-item">
      <div className="cloth-item-img-container">
        <img
          src={url + "/images/" + image}
          alt=""
          className="cloth-item-image"
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="cloth-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="cloth-item-info">
        <div className="cloth-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="cloth-item-desc">{description}</p>
        <p className="cloth-item-price"> Rs.{price} </p>
      </div>
    </div>
  );
};

export default ClothItem;
