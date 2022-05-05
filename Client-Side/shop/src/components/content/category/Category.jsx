import React,{ useEffect, useState } from 'react'
import './Category.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Category = ({Category}) => {
  const navigate = useNavigate();
  const goToCategoryFilter = (e) => {
    console.log(e.target.id)
    navigate('/category/'+e.target.id)
  }

  return (
    <div onClick={goToCategoryFilter} id={Category[0]} className="category">
    <div id={Category[0]} className="category__info">
      <h5>{Category[0]}</h5>
    </div>
    <img id={Category[0]} src={'data:image/png;base64,'+Category[1]}></img>
  </div>
  )
}

export default Category