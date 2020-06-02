import React from "react";
import image from "./images/logo.png";
import styles from "./App.module.css";
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} alt="logo" src={image} />
      </div>
    );
  }
}

export default App;
