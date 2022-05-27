import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import ProductItem from "../../components/content/product-view/product-card/ProductCard";
import "../categoryProducts/productsss.css";
import "./FilteredPage.css";

const FilteredPage = () => {
  const params = useParams();
  const [Data, setData] = useState([]);
  const [filter, setFilter] = useState(false);
  //  console.log(params.key)
  useEffect(() => {
    Axios.get("http://localhost:5000/api/Products/name/" + params.key)
      .then((res) => {
        //    console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.key]);
  useEffect(() => {}, [filter]);
  const LowToHigh = () => {
    let lowestToHighest = Data.sort((a, b) => a.price - b.price);
    //    console.log(lowestToHighest)
    setData(lowestToHighest);
    setFilter(!filter);
  };
  const HighToLow = () => {
    let HighestToLowest = Data.sort((a, b) => b.price - a.price);
    //  console.log(HighestToLowest)
    setData(HighestToLowest);
    setFilter(!filter);
  };
  const Latest = () => {
    let latest = Data.sort( (a, b) => {
      var b1 = b.timeCreated.substring(0,10)
      var bb = b1.split("-");
      var a1 = a.timeCreated.substring(0,10)
      var aa = a1.split("-");
      return bb[2] - aa[2] || bb[1] - aa[1] || bb[0] - aa[0];
    });
    setData(latest)
    setFilter(!filter)
    console.log(latest)
  };
  const arr = Data.map((data, index) => {
    return (
      <div key={index}>
        <ProductItem product={data} type="view" />
      </div>
    );
  });
  return (
    <div className="page">
      {Data.length === 0 && (
        <div className="error">
          <p>There is no current produts with this key name</p>
          <p>
            please go back to the explore by clicking on the logo in the navbar
          </p>
        </div>
      )}
      <div className="filter_contsainer">
        <button className="filter_buttons" onClick={HighToLow}>Filter by higher price</button>
        <button className="filter_buttons" onClick={LowToHigh}>Filter by lower price</button>
        <button className="filter_buttons" onClick={Latest}>Filter by latest date</button>
      </div>
      <div className="products">{arr}</div>
    </div>
  );
};

export default FilteredPage;
