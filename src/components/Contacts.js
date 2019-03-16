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

  deleteContact = id => {
    console.log("Contacts object", id);
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
