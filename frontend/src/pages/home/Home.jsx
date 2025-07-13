//import React from 'react'
import { useState } from 'react'
import ExploreCategories from '../../components/ExploreCategories/ExploreCategories'
import Header from '../../components/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/clothDisplay/ClothDisplay'
import AppDownload from '../../components/appDownload/AppDownload'

const Home = () => {
    const [type,setType] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreCategories type={type} setType={setType} />
      <FoodDisplay type={type} />
      <AppDownload/>
    </div>
  )
}

export default Home
