import React from "react";
import "./home.css";
import Slider from "../../components/elements/Slider/Slider";
import { useEffect, useState, useContext } from 'react'
import Axios from 'axios'
import Category from "../../components/content/category/Category";
import { cardContext } from "../../contexts/cardContext";
import { addressContext } from "../../contexts/addressContext";

const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/api/Images/Category')
      .then(res => {
    //    console.log(res.data);
        setData(res.data);
      }).catch(err => console.log(err))
  }, []);

  const arr = Data.map((data, index) => {
    const category = data.split(":");
    return (
      <Category Category={category}/>
    )
  });

  return (
    <div className="home page">
      <div className="home__container">
        <Slider />
        <div className="home__row">
          {arr}
        </div>
      </div>
    </div>
  );
}

export default Home;
