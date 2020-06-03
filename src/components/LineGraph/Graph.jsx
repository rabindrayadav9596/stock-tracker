import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./Graph.module.css";
const Graph = ({ data }) => {
  console.log(data);
  const stockData = Object.values(data);
  console.log(stockData);

  const todayStock = stockData[0];
  console.log(todayStock);
  let todayStockValue = null;
  if (todayStock) {
    console.log(todayStock);
    todayStockValue = Object.values(todayStock);
    console.log(todayStockValue);
  }

  const lineChart = todayStock ? (
    <Line
      data={{
        labels: Object.keys(data),
        datasets: [
          {
            data: todayStockValue,

            label: "Open",
            borderColor: "#3333ff",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  //   const lineChart = data[0] ? (
  //     <Line
  //       data={{
  //         labels: Object.keys(data),
  //         datasets: [
  //           {
  //             data: data.map((data) => data.confirmed),
  //             label: "Infected",
  //             borderColor: "#3333ff",
  //             fill: true,
  //           },
  //         ],
  //       }}
  //     />
  //   ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Graph;
