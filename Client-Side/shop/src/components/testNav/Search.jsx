import React, { useState, useEffect } from "react";
import "./Search.css";
import Axios from "axios";
import { Link } from "react-router-dom";

function SearchBar({ placeholder, data }) {
    const [Data, setData] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/api/Products')
            .then(res => {
           //     console.log(res.data);
                setData(res.data);
            }).catch(err => console.log(err))
    }, [])
    const [searched, setSearched] = useState('');
    const [show, setshow] = useState(false);
    const HandleChange = (e) => {
        e.preventDefault();
        setSearched(e.target.value);
        if (e.target.value === '') {
            setshow(false);
        } else {
            setshow(true);
        }
        console.log(show)
    }
    var arr1 = [];
    if (searched.length > 0) {
        arr1 = Data.filter((data) => {
            return data.name.match(searched)
        })
    }
    const arr = arr1.map((data, index) => {
        const url="/product-details/"+data.productId
        return (
                <Link onClick={()=>{
                    document.getElementById('searchBar').value='';
                    setshow(false)
                }} key={index} className="dataItem" to={url} >
                    <p>{data.name}
                        <strong>{data.price}</strong>
                        <small>K L.L</small>
                    </p>
                </Link>
        )
    });
    return (
        <div className="search">
            <div className="searchInputs">
                <input id = 'searchBar'type="text"placeholder='Search..'value={searched}onChange={HandleChange}/>
                <div className="searchIcon">
                    {!show ? (<i className="fa fa-search" />) : (<i className="fa fa-trash"/>)}
                </div>
            </div>
            {show && <div className="dataResult">
                {arr}
            </div>}
        </div>
    );
}

export default SearchBar;
