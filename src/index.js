import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import Title from "./title";
import Info from "./info";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }

  increaseClicks = () => {
    this.setState({ ...this.state, clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div>
        <Title clicks={this.state.clicks} />
        <Button action={this.increaseClicks} />
        <Info />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
