import React from "react";
import image from "./images/logo.png";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Graph from "./components/LineGraph/Graph.jsx";
class App extends React.Component {
  state = {
    data: {},
    company: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    // console.log(data["Time Series (Daily)"]);
    // console.log(data["Meta Data"]["2. Symbol"]);
    this.setState({
      data: data["Time Series (Daily)"],
      company: data["Meta Data"]["2. Symbol"],
    });
  }

  render() {
    const { company, data } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} alt="logo" src={image} />
        <h2>{company}</h2>
        <Graph data={data} />
      </div>
    );
  }
}

export default App;
