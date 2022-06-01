import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { userContext } from "../../contexts/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./VerticalBarChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBarChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Categories Sales",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Art",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(120,190,33, 0.5)",
      },
      {
        label: "Books",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(146, 200, 50, 0.5)",
      },
      {
        label: "Fashion",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(156, 240, 96, 0.5)",
      },
      {
        label: "Electronics",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(136, 255, 46, 0.5)",
      },
      {
        label: "Furniture",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(123, 170, 35, 0.5)",
      },
      {
        label: "Accessories",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(113, 160, 95, 0.5)",
      },
      {
        label: "Beauty",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(100, 150, 75, 0.5)",
      },
      {
        label: "Toys",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(60, 170, 85, 0.5)",
      },
    ],
  };
  return (
    <div className="VerticalBarChartContainer">
      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalBarChart;
