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
  let value = stockData.map((item) => {
    return Object.values(item);
  });
  console.log(value);

  let openValue = [];
  for (let i = value.length - 1; i >= 0; i--) {
    openValue.push(value[i][0]);
  }
  console.log(openValue);
  const dateAPI = Object.keys(data);
  let date = [];
  for (let i = dateAPI.length - 1; i >= 0; i--) {
    date.push(dateAPI[i]);
  }

  const lineChart = todayStock ? (
    <Line
      data={{
        labels: date,
        datasets: [
          {
            data: openValue,

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
