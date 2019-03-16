import React, { Component } from "react";

class AddContact extends Component {
  // When you create a form each part will be part of the state
  state = {
    name: "",
    email: "",
    phone: ""
  };

  render() {
    const { name, email, phone } = this.state;

    // When you set a value on an input it becomes a
    // "controlled component" and you cannot input anything
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number..."
                value={phone}
              />
            </div>
          </form>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    );
  }
}

export default AddContact;
