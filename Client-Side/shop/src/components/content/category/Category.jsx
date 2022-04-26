import React,{ useEffect, useState } from 'react'
import './Category.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Category = ({ID,Category}) => {
  const navigate = useNavigate();
  const goToCategoryFilter = (e) => {
    console.log(e.target.id)
    navigate('/category/'+e.target.id)
  }

  return (
    <div onClick={goToCategoryFilter} id={ID} className="category">
    <div id={ID} className="category__info">
      <h5>{Category}</h5>
    </div>
    <img id={ID} src='https://www.minotti.com/media/immagini/24195_n_WEST--.jpg'></img>
  </div>
  )
}

export default Category