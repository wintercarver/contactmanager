import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();

    // FYI: This state definition inside a class
    // doesn't need to occur inside the constructor
    this.state = {
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
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            // name={contact.name}
            // email={contact.email}
            // phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
