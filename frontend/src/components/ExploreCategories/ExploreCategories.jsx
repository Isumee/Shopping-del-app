//import React from 'react'
import './ExploreCategories.css'
import { category_list } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const ExploreCategories = ({type,setType}) => {
  return (
    <div className='explore-category' id='explore-category' >
      <h1 className='h1e'>Explore Categories</h1>
      <p className='explore-category-text'>Discover a diverse array of trendy clothes and stylish accessories, all from the comfort of your home.</p>
      <div className="explore-category-list">
        {category_list.map((item,index)=>{
            return(
                <div onClick={()=>setType(prev=>prev===item.category_name?"All":item.category_name)} key={index} className="explore-category-list-item">
                     <img className={type===item.category_name?"active":""} src={item.category_image} alt="" />
                     <p className='item_category'>{item.category_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreCategories
