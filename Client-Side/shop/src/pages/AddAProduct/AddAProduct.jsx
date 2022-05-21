import React from 'react'
import './AddAProduct.css'
import AddProductInfo from '../../components/AddProductInfo/AddProductInfo'
import Upload from '../../components/elements/Upload'

const AddAProduct = () => {
  return (
    <div className='AddProductContainer'>
      <Upload/>
      <AddProductInfo />
    </div>
  )
}

export default AddAProduct