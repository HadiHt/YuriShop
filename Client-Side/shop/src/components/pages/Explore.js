import React from 'react'
import Navbar from '../navbar/Navbar'
import Modal from '../modal/Modal'
import Footer from '../footer/Footer'
import CollapsedNavbar from '../navbar/CollapsedNavbar';
import Category from '../category/Category';
import Slider from '../elements/Slider/Slider';
import './Explore.css'

const Explore = () => {
  return (
    <div>
      <Navbar/>
      <CollapsedNavbar/>
      <Slider/>
      {/* <Modal/> */}
      <Category/>
      <Footer/>
    </div>
  )
}

export default Explore