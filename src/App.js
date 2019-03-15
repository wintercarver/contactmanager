import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-666-5555" />
        <Contact name="Jane" email="jane@gmail.com" phone="777-666-5555" />
      </div>
    );
  }
}

export default App;
