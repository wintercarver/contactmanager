import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  // optional definition of propTypes
  // inside class. Can put outside class
  // as below.
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };
  state = {};

  onShowClick = (name, email, e) => {
    console.log(name, email);
  };

  render() {
    // Destructuring
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.onShowClick.bind(this, name, email)}
            className="fas fa-sort-down"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
