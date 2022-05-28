import React from 'react'
import './Carousel.css'

const CaouselItem = ({slide}) => {
  return (
        <img className='carousel-img' src={slide}></img>
  )
}

export default CaouselItem