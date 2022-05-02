import React from 'react'
import './producrcard.css'
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const imgp = product.image;
    const url = product.productId;
    return (
        <div className="product_card">
            <img src={"data:image/png;base64," + imgp} alt="" />

            <div className="product_box">
                <div className='product_header'>
                    <h2>{product.name}</h2>
                    <i className='fav fa fa-star'></i>
                </div>
                <span>{product.price}K L.L</span>
                <p>{product.category}</p>
            </div>
            <div className="row_btn">
                <Link id="btn_view" to={'/product-details/'+url}>
                    view
                </Link>
            </div>
        </div>
    )
}

export default ProductItem