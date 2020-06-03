import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import styles from "./Graph.module.css";
const Graph = ({ data }) => {
  console.log(data);
  const stockData = Object.values(data);
  console.log(stockData);
  //   console.log(stockData);
  //   const todayStock = stockData[0];
  //   console.log(todayStock);
  //   //console.log(todayStock["1. open"]);
  //   //console.log(Object.keys(data));
  //   const openValue = todayStock.map((value) => {
  //     value["1. open"];
  //   });

  const lineChart = (
    <Line
      data={{
        labels: Object.keys(data),
        datasets: [
          {
            data: [4, 5, 6, 7, 9, 11],

            label: "Open",
            borderColor: "#3333ff",
            fill: true,
          },
        ],
      }}
    />
  );

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
