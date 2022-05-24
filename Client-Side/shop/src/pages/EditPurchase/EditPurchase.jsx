import React from 'react'
import './EditPurchase.css'
import { useParams } from 'react-router-dom'
import PurchaseEdit from '../../components/PurchaseEdit/PurchaseEdit';

const EditPurchase = () => {
    const params = useParams();
    console.log(params.id)
  return (
    <div className='AddProductContainer'>
        <PurchaseEdit/>
    </div>
  )
}

export default EditPurchase