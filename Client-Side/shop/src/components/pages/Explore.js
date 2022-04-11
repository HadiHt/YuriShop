import React from 'react'
import Navbar from '../navbar/Navbar'
import Modal from '../modal/Modal'
import Footer from '../footer/Footer'
import CollapsedNavbar from '../navbar/CollapsedNavbar';
import './Explore.css'

const Explore = () => {
  return (
    <div>
      <Navbar/>
      <CollapsedNavbar/>
      {/* <Modal/> */}
      <Footer/>
    </div>
  )
}

export default Explore