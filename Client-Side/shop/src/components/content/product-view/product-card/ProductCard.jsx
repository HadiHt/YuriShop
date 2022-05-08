import React, { useState, useEffect, useContext } from 'react'
import './producrcard.css'
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../../../contexts/cartContext';
import Axios from 'axios';

const ProductItem = ({ product, type }) => {

    const [Data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/Images/Product/productid'+product.productId)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            }).catch(err => console.log(err))
    }, []);

    const { cart, setCart } = useContext(cartContext);

    const removeProductFromCart = (e) => {
        const arr1 = cart.filter((data) => {
            if (data.productId !== product.productId && data.quantity !== product.productId) {
                return data
            }
        });
        setCart(arr1);
    }

    const CartCardProduct = () => {
        return (
            <div>
                <p>quantity : {product.quantity}</p>
                <p>price: {product.price}K. L.L per 1 item</p>
            </div>
        )
    }

    const imgp = Data;
    const url = product.productId;
    const navigate = useNavigate();
    return (
        <div className="product_card">
            <img src={"data:image/png;base64," + imgp} alt="" />

            <div className="product_box">
                <div className='product_header'>
                    <h2>{product.name}</h2>
                    <i className='fav fa fa-star'></i>
                </div>
                {type === "view" ? <span>{product.price}K L.L</span> : ""}
                <p>{product.category}</p>
                {type === "cart" ?
                    <CartCardProduct />
                    : ""}
            </div>
            <div className="row_btn">
                {type === "view" ? <button className="btn_view"
                    onClick={() => navigate('/product-details/' + url)}>
                    view
                </button> : ""}
                {type == "cart" ? <button id={product.productId} className="btn_remove"
                    onClick={removeProductFromCart}>
                    remove
                </button> : ""}
            </div>
        </div>
    )
}

export default ProductItem