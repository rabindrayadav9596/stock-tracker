import React from "react";
import image from "./images/logo.png";
import styles from "./App.module.css";
import { fetchData } from "./api";
import CompanyPicker from "./components/CompanyPicker/CompanyPicker.jsx";
import Graph from "./components/LineGraph/Graph.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/Footer/footer.jsx";
class App extends React.Component {
  state = {
    data: {},
    company: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    // console.log(data["Time Series (Daily)"]);
    // console.log(data["Meta Data"]["2. Symbol"]);
    console.log(data);
    this.setState({
      // data: data,
      data: data["Time Series (Daily)"],
      company: data["Meta Data"]["2. Symbol"],
    });
  }

  handleCompanyChange = async (symbol) => {
    const data = await fetchData(symbol);
    this.setState({
      data: data["Time Series (Daily)"],
      company: data["Meta Data"]["2. Symbol"],
    });
    //console.log(data);
  };

  render() {
    const { data, company } = this.state;

    return (
      <div className={styles.container}>
        <NavBar />
        <img className={styles.image} alt="logo" src={image} />
        <CompanyPicker handleCompanyChange={this.handleCompanyChange} />
        <Graph data={data} company={company} />
        <Footer />
      </div>
    );
  }
}

export default App;
