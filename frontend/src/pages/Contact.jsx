import React, { Component } from "react";
import axios from "axios";

import Footer from "../components/footer/Footer";

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
      this.props.history.push(`/contact`);

      this.setState({
        Email: "",
        Message: "",
      });
    }
  }

  render() {
    return (
      <div style={{ marginTop: 25 }}>
        <div className="container" style={{ width: 670, backgroundColor: "#e3e4e6", borderRadius: 5, paddingBottom: 20, paddingTop: 20  }}>
          <h3 style={{ fontSize: 40 }}>
            <center>Contact Us</center>
          </h3>
          <div className="container-fluid" style={{ width: 650 }}>
            <div className="col-lg-10 offset-lg-1">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label style={{ fontSize: 20 }}>Email Address:</label>
                  <input
                    type="email"
                    className="form-control"
                    value={this.state.Email}
                    onChange={this.onChangeEmail}
                    style={{ borderColor: "black", borderWidth: 1 }}
                    required
                  />
                  <span className="text-danger">{this.state.EmailError}</span>
                </div>

                <div
                  className="form-group"
                  style={{ marginTop: 20, marginTop: 20 }}
                >
                  <label style={{ fontSize: 20 }}>Message:</label>
                  <textarea
                    type="text"
                    className="form-control"
                    value={this.state.Message}
                    onChange={this.onChangeMessage}
                    style={{ borderColor: "black", borderWidth: 1 }}
                    required
                  />
                </div>

                <div
                  className="form-group"
                  style={{ marginTop: 30, marginBottom: 15 }}
                >
                  <center>
                    <input
                      type="submit"
                      value="Add Feedback"
                      className="btn btn-success"
                      style={{ fontSize: 20 }}
                    />
                  </center>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
