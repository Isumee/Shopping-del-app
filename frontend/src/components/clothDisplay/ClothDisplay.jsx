//import React from 'react'
import { useContext } from "react";
import "./ClothDisplay.css";
import { StoreContext } from "../../context/StoreContex";
import ClothItem from "../ClothItem/ClothItem";

// eslint-disable-next-line react/prop-types
const ClothDisplay = ({ type }) => {
  const { cloth_list } = useContext(StoreContext);

  return (
    <div className="cloth-display" id="cloth-display">
      <h2>Top Trendy Items</h2>
      <div className="cloth-display-list">
        {cloth_list.map((item, index) => {
          if (type === "All" || type === item.category) {
            return (
              <ClothItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ClothDisplay;
