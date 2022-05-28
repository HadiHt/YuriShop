import React, { useState, useEffect } from "react";
import "./Search.css";
import Axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

function SearchBar({ placeholder, data }) {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/Products")
      .then((res) => {
        //     console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [searched, setSearched] = useState("");
  const [show, setshow] = useState(false);
  const HandleChange = (e) => {
    e.preventDefault();
    setSearched(e.target.value);
    if (e.target.value === "") {
      setshow(false);
    } else {
      setshow(true);
    }
    //   console.log(show)
  };
  const submitted = (e) => {
    if (searched != "") {
      if (e.which === 13) {
        navigate("/filtered-products/" + searched);
        setshow(false);
        setSearched("");
      }
    } else {
      if (e.which === 13) {
        //    console.log(searched)
        navigate("/filtered-products/404-products-not-found");
      }
    }
  };
  var arr1 = [];
  if (searched.length > 0) {
    arr1 = Data.filter((data) => {
      return data.name
        .toString()
        .toLowerCase()
        .includes(searched.toLowerCase());
    });
  }
  const arr = arr1.map((data, index) => {
    const url = "/product-details/" + data.productId;
    return (
      <div
        onClick={() => {
          document.getElementById("searchBar").value = "";
          setshow(false);
          navigate(url);
        }}
        key={index}
        className="dataItem"
      >
        <p>{data.name}</p>
      </div>
    );
  });
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          onKeyUp={submitted}
          id="searchBar"
          type="text"
          placeholder="Search.."
          value={searched}
          onChange={HandleChange}
        />
        <div className="searchIcon">
          <i className="fa fa-search" />
        </div>
      </div>
      {show && <div className="dataResult">{arr}</div>}
    </div>
  );
}

export default SearchBar;
