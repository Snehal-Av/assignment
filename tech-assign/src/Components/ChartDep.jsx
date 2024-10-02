import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  BarElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import WidthSize from "./WidthSize";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartDep = () => {
  const width = WidthSize();

  const [cData, setCData] = useState([])


  const getGraphData = async () => {
    await axios.get("http://localhost:5000/form/depart")
      .then((res) => {
        setCData(res.data)
        console.log(res.data);
      })
  }
  useEffect(() => {
    getGraphData()
  },[])
  
  const chartData = {
    labels: cData.map((item) => {
      const percentage =
        item.totalPro > 0
          ? ((item.closedPro / item.totalPro) * 100).toFixed(1)
          : 0;
      return [`${percentage}%`, `${item.department}`];
    }),
    datasets: [
      {
        label: "total",
        data: cData.map(item => item.totalPro),
        backgroundColor: "blue",
        // barThickness: width>700 ? 12: 6,
        borderRadius: 10,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        datalabels: {
          display: true,
          anchor: "end",
          align: "top",
          formatter: (value) => value,
          color: "black",
          font: {
            size: width > 700 ? 10 : 8,
          },
        },
      },
      {
        label: "closed",
        data: cData.map(item => item.closedPro),
        backgroundColor: "green",
        borderRadius: 10,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        datalabels: {
          display: true,
          anchor: "end",
          align: "top",
          formatter: (value) => value,
          color: "black",
          font: {
            size: width > 700 ? 10 : 8,
          },
        },
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: width > 700 ? 30 : 10,
          font: {
            size: width > 700 ? 10 : 8,
          },
        },
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        stack: true,
        ticks: {
          autoSkip: false,
          font: {
            size: width > 700 ? 10 : 12,
            weight: "bold",
          },
        },

      },
      y: {
        title: {
          display: true,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        bginAtZero: true
      }
    }
  };

  return (
    <div className="chart-data">

      <Bar data={chartData} options={options} />

    </div>
  );
};

export default ChartDep;
