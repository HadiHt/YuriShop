import React from "react";
import "./home.css";
import Slider from "../../components/elements/Slider/Slider";
import Product from "../../components/content/product-view/product";
import { useEffect, useState, useContext } from 'react'
import Axios from 'axios'
import Category from "../../components/content/category/Category";
import { userContext } from "../../userContext";

const Home=()=> {
    const [Data, setData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:5000/api/Products')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            }).catch(err => console.log(err))
    }, [])
    const arr = Data.map((data, index) => {
        return (
            <div  key={index}>
                {/* <Product
            category={data.category}
            title={data.name}
            price={data.price}
            image={'data:image/png;base64,'+data.image}
          /> */}
              
            </div>
        )
    });
    const {user, setUser}= useContext(userContext);
  return (
    <div className="home">
      <div className="home__container">
        <Slider/>
        <div>{user}</div>
        <div className="home__row">
              <Category ID={'furniture'} Category={'furniture'}/>
              <Category ID={'electronics'} Category={'electronics'}/>
              <Category ID={'clothing'} Category={'clothing'}/>
              <Category ID={'accessories'} Category={'accessories'}/>
              <Category ID={'books'} Category={'books'}/>
              <Category ID={'art'} Category={'art'}/>
        </div>
        <div onClick={()=>{setUser('jejejeje')}}>click</div>
      </div>
    </div>
  );
}

export default Home;