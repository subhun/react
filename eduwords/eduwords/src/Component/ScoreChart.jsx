import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "../css/infostudent.css";
import { useParams } from "react-router-dom";
Chart.register(...registerables);

const ScoreChart = ({ data }) => {
  const chartIn = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "점수",
        data: data.map((item) => item.score),
        backgroundColor: "#239aff",
        borderColor: "#239aff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          font: {
            size: 14,
          },
          color: "#239aff",
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
    maintainAspectRatio: false,
  };

  return <Bar data={chartIn} options={options} />;
};

export default ScoreChart;
