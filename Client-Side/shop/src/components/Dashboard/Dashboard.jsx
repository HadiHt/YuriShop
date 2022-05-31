import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../../contexts/shopContext";
import { userContext } from "../../contexts/userContext";

import "./Dashboard.css";

const Dashboard = (props) => {
  const { user } = useContext(userContext);
  const { shop } = useContext(shopContext);
  const [item1, setItem1] = useState("Selected1");
  const [item2, setItem2] = useState("NotSelected2");
  const [item3, setItem3] = useState("NotSelected3");
  const [item4, setItem4] = useState("NotSelected4");
  const location = window.location.href;
  const arr = location.split("/");
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      window.scrollY < props.value[0] - 70 && window.scrollY >= 0
        ? setItem1("Selected1")
        : setItem1("NotSelected1");
      window.scrollY < +props.value[0] + props.value[1] &&
      window.scrollY >= props.value[0] - 70
        ? setItem2("Selected2")
        : setItem2("NotSelected2");
      window.scrollY < props.value[0] + props.value[1] + props.value[2] &&
      window.scrollY >= +props.value[0] + props.value[1]
        ? setItem3("Selected3")
        : setItem3("NotSelected3");
      window.scrollY >= props.value[0] + props.value[1] + props.value[2]
        ? setItem4("Selected4")
        : setItem4("NotSelected4");
    });
  });
  
  return (
    <div className="SidebarContainer">
      <h3 className="SideBarTitle">DASHBOARD</h3>
      <ul className="DashboardList">
        <li className={item1}>BIOS INFO</li>
        <li className={item2}>ADDRESS</li>
        <li className={item3}>ORDER</li>
        {arr[3] == "UserProfile" && <li className={item4}>WISHLIST</li>}
        {arr[3] == "ShopProfile" && <li className={item4}>PRODUCTS</li>}
      </ul>
    </div>
  );
};

export default Dashboard;
