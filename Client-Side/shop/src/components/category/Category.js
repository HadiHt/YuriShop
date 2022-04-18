import React from 'react'
import { useEffect, useState } from 'react'
import CategoryContent from './CategoryContent'
import './Category.css'

const Category = () => {
    const [Data, setData] = useState([]);

    const fetchy= async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");

        // fetch("http://localhost:5000/api/Products/Category/electronics", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        const response = await fetch("http://localhost:5000/api/Products/Category/electronics",myHeaders);
        const data = await response.json();
        console.log(data)}

    return (
        <div className='envelope'>
            <div className='responsive'>
                <div className='category'>
                    <img className='image-preview' ></img>
                    <img className='image-preview'></img>
                    <img className='image-preview' ></img>
                    <img className='image-preview' ></img>
                </div>
                <button onClick={fetchy}></button>
            </div>
        </div>
    )
}

export default Category