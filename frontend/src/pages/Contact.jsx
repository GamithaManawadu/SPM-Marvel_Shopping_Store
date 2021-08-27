import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

import Footer from "../components/footer/Footer";

const initialState = {
  email: "",
  message: "",
};
class Contact extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = async (e) => {
    e.preventDefault();

    let newFeedback = {
      email: this.state.email,
      message: this.state.message,
    };

    console.log("success", newFeedback);

    await axios
      .post("http://localhost:3000/feedback/add", newFeedback)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Feedback send successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        this.props.history.push("/contact");

        this.setState({
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(console.err.message);
      });
  };

  render() {
    return (
      <div style={{ marginTop: 25 }}>
        <div
          className="container"
          style={{
            width: 670,
            backgroundColor: "#e3e4e6",
            borderRadius: 5,
            paddingBottom: 20,
            paddingTop: 20,
          }}
        >
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
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChange}
                    style={{ borderColor: "black", borderWidth: 1 }}
                    required
                  />
                </div>

                <div
                  className="form-group"
                  style={{ marginTop: 20, marginTop: 20 }}
                >
                  <label style={{ fontSize: 20 }}>Message:</label>
                  <textarea
                    type="text"
                    name="message"
                    className="form-control"
                    value={this.state.message}
                    onChange={this.onChange}
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
                      onClick={() => this.props.history.push("/contact")}
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

export default withRouter(Contact);
