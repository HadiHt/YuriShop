import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import ProductItem from '../../components/content/product-view/product-card/ProductCard'
import './productsss.css'

const CategoryProducts = () => {
    const params = useParams();
    const [Data, setData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/api/Products/Category/' + params.john)
            .then(res => {
                console.log(res.data);
                setData(res.data);
            }).catch(err => console.log(err))
    }, [])
    const arr = Data.map((data, index) => {
        return (
            <div key={index}>
                <ProductItem product={data}
                />
            </div>
        )
    });
    return (
        <div className='products page'>{arr}</div>
    )
}

export default CategoryProducts