import React, { Component } from "react";
import axios from "axios";

import Footer from "../components/footer/Footer";
import { grey } from "@material-ui/core/colors";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Email: "",
      Message: "",

      EmailError: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      Message: e.target.value,
    });
  }

  validate = () => {
    let isError = false;

    const errors = {
      EmailError: "",
    };

    if (this.state.Email.indexOf("@") === -1) {
      isError = true;
      errors.EmailError = "Require Valid Email Address";
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  onSubmit(e) {
    e.preventDefault();

    const err = this.validate();
    if (!err) {
      console.log(`Form submitted:`);
      console.log(`Email Address: ${this.state.Email}`);
      console.log(`Message: ${this.state.Message}`);

      const newFeedback = {
        Email: this.state.Email,
        Message: this.state.Message,
      };

      axios
        .post("http://localhost:3000/feedback/add", newFeedback)
        .then((res) => console.log(res.data));
      alert("Feedback send Successfully");
      this.props.history.push("/contact");

      this.setState({
        Email: "",
        Message: "",
      });
    }
  }

  render() {
    return (
      <div style={{ marginTop: 20, backgroundColor: grey }}>
        <h3>
          <center>Contact Us</center>
        </h3>

        <div className="container" style={{ width: 650 }}>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Email Address:</label>
              <input
                type="email"
                className="form-control"
                value={this.state.Email}
                onChange={this.onChangeEmail}
                required
              />
              <span className="text-danger">{this.state.EmailError}</span>
            </div>

            <div className="form-group">
              <label>Message:</label>
              <textarea
                type="text"
                className="form-control"
                value={this.state.Message}
                onChange={this.onChangeMessage}
                required
              />
            </div>

            <div
              className="form-group"
              style={{ marginTop: 30, marginBottom: 30 }}
            >
              <center>
                <input
                  type="submit"
                  value="Add Feedback"
                  className="btn btn-success"
                />
              </center>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
