import axios from "axios";
import React, { useContext } from "react";
import { useState, createContext, useEffect } from "react";

export const imageContext = createContext("");

export const ImageProvider = (props) => {
  const [image, setImage] = useState("");
  const setPfp = (user, shop) => {
    if (user !== "") {
      axios.get(
        "http://localhost:5000/api/Images/UserProfile/userId" + user.userId
      )
        .then((res) => {
          //    console.log(res.data);
          setImage(res.data);
        })
        .catch((err) => console.log(err));
    }
    if (shop !== "") {
      axios.get(
        "http://localhost:5000/api/Images/ShopProfile/shopId" + shop.shopId
      )
        .then((res) => {
          //    console.log(res.data);
          setImage(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <imageContext.Provider value={{ image, setImage, setPfp }}>
      {props.children}
    </imageContext.Provider>
  );
};
