import React, { useState, useEffect, useContext } from 'react'
import './producrcard.css'
import { useNavigate } from 'react-router-dom';
import { cartContext } from '../../../../contexts/cartContext';
import Axios from 'axios';
import { shopContext } from '../../../../contexts/shopContext';
import { userContext } from '../../../../contexts/userContext';

const ProductItem = ({ product, type }) => {

    const [Data, setData] = useState([]);
    const { cart, setCart } = useContext(cartContext);
    const [ isWishlist, setIsWishlist ] = useState(false);
    const [SHop, setShop] = useState([]);
    const {shop}=useContext(shopContext);
    const {user}=useContext(userContext);
    const [Wishlist, SetWishlist] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/Images/Product/productid' + product.productId)
            .then(res => {
              //  console.log(res.data);
                setData(res.data);
                Axios.get('http://localhost:5000/api/Shops/' + product.shopRefId)
                    .then(res => {
                  //      console.log(res.data);
                        setShop(res.data);
                    }).catch(err => console.log(err))
            }).catch(err => console.log(err))
         Axios.get('http://localhost:5000/api/Users/'+user.userId+'/wishlist')
            .then(res => {
                res.data.filter((wProduct)=>{
                    if(wProduct.productRefId==product.productId){
                        setIsWishlist(true);
                        console.log(isWishlist)
                        SetWishlist(wProduct)
                    }
                })
            }).catch(err => console.log(err))
    }, [product,isWishlist]);

    const addToWishList = () =>{
        Axios.post('http://localhost:5000/api/Users/'+user.userId+'/wishlist',
            {
                userRefId:user.userId,
                productRefId:product.productId
            }
        )
            .then(res => {
                setIsWishlist(true);
            }).catch(err => console.log(err))
    }
    const deleteFromWishList = () =>{
        Axios.delete('http://localhost:5000/api/Users/'+Wishlist.wishListId+'/wish')
            .then(res => {
                setIsWishlist(false);
            }).catch(err => console.log(err))
    }

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

    const navigation = () => {
        if(user === "" && shop===""){
            navigate('/logIn')
        }else{
            navigate('/ShopProfile/'+SHop.shopId)
        }
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
                    <i onClick={isWishlist? deleteFromWishList:addToWishList} className={isWishlist? 'red fa fa-heart' : 'grey fa fa-heart'}></i>
                </div>
                {type === "view" ? <span>{product.price}K L.L</span> : ""}
                <p>{product.category}</p>
                <p onClick={navigation} className='shopName'>shop: {SHop.username}</p>
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