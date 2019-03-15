import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="jdoe@gmail.com"
            phone="555-666-5555"
          />
          <Contact
            name="Jane Does"
            email="jane@gmail.com"
            phone="777-666-5555"
          />
        </div>
      </div>
    );
  }
}

export default App;
