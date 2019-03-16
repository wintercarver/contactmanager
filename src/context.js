import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  // This is where global state is stored
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "what@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "the@gmail.com",
        phone: "555-666-5555"
      },
      {
        id: 3,
        name: "Gotti Smalls",
        email: "boss@gmail.com",
        phone: "777-555-5555"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
