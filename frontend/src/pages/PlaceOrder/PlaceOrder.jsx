//import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContex";

const PlaceOrder = () => {
  const { getTotalCartAmount,token,cloth_list,cartItems,url } = useContext(StoreContext);
  

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    province:"",
    phone:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    cloth_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+200,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if (response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
  }

  const navigate = useNavigate();


  useEffect(()=>{
    if (!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0)
    {
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First name" />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last name" />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address" />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name='province' onChange={onChangeHandler} value={data.province} type="text" placeholder="Province" />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p> Rs.{getTotalCartAmount()===0?0:200} </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount() + 200}</b>
            </div>
         
          </div>
        <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
