import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./Graph.module.css";
const Graph = ({ data }) => {
  console.log(data);
  const stockData = Object.values(data);

  let value = stockData.map((item) => {
    return Object.values(item);
  });
  console.log(value);

  //creating openValue
  let openValue = [];
  for (let i = value.length - 1; i >= 0; i--) {
    openValue.push(value[i][0]);
  }
  console.log(openValue);

  //creating highValue
  let highValue = [];
  for (let i = value.length - 1; i >= 0; i--) {
    highValue.push(value[i][1]);
  }
  console.log(highValue);

  //creating lowValue
  let lowValue = [];
  for (let i = value.length - 1; i >= 0; i--) {
    lowValue.push(value[i][2]);
  }
  console.log(lowValue);

  //creating closeValue
  let closeValue = [];
  for (let i = value.length - 1; i >= 0; i--) {
    closeValue.push(value[i][3]);
  }
  console.log(closeValue);

  //creating volume
  let volume = [];
  for (let i = value.length - 1; i >= 0; i--) {
    volume.push(value[i][4]);
  }
  console.log(volume);

  //date for labelling
  const dateAPI = Object.keys(data);
  let date = [];
  for (let i = dateAPI.length - 1; i >= 0; i--) {
    date.push(dateAPI[i]);
  }
  const lineChart = stockData[0] ? (
    <Line
      data={{
        labels: date,
        datasets: [
          {
            data: closeValue,
            label: "Close",
            borderColor: "orange",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: false,
          },
          {
            data: openValue,
            label: "Open",
            borderColor: "#3333ff",
            hidden: true,
            fill: false,
          },
          {
            data: highValue,
            label: "High",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            hidden: true,
            fill: false,
          },
          {
            data: lowValue,
            label: "Low",
            borderColor: "purple",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            hidden: true,
            fill: false,
          },
          {
            data: volume,
            label: "Volume",
            borderColor: "violet",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            hidden: true,
            fill: false,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Graph;
