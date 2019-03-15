import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // // JSX example code for same result
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The App Component")
    // );
    const name = "Larry";
    const showHello = false;
    const showMath = true;

    let math;
    if (showMath) {
      math = <h4>1 + 1 = {1 + 1}</h4>;
    } else {
      math = null;
    }
    return (
      <div className="App">
        <h1>The App Component</h1>
        <h4>Hello {name} </h4>
        {math}
      </div>
    );
  }
}

export default App;
