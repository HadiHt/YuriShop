import React from 'react'
import './OrderViewHeader.css'

const OrderViewHeader = () => {
    return (
        <div className='OrderViewHeader'>
            <div className='OrderPreviewLogo'>
                <img src={process.env.PUBLIC_URL + '/Order_Common_Photo.jpeg'} alt=''></img>
                <p>Click on Order to see its details</p>
            </div>
        </div>
    )
}

export default OrderViewHeader