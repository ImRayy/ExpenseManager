import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";
Chart.register(ArcElement);
interface ChartProps {
  labels: object;
}
const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [20, 20, 60],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut data={data} />;
};

export default PieChart;
