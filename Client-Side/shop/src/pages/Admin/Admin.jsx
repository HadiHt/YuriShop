import React from "react";
import "./Admin.css";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Application from "../../components/Application/Application";
import VerticalBarChart from "../../components/VerticalBarChart/VerticalBarChart";
import PieChart from "../../components/PieChart/PieChart";
import LineChart from "../../components/LineChart/LineChart";

const Admin = () => {
  return (
    <div className="AdminPageContainer">
      <Application />
      <VerticalBarChart />
      <div className="FlexChartContainer">
        <PieChart />
        <LineChart />
      </div>
    </div>
  );
};

export default Admin;
