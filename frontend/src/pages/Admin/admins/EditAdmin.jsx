import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

export default class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      contact: "",

      emailError: "",
      contactError: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/admin/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          contact: response.data.contact,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value,
    });
  }

  validate = () => {
    let isError = false;

    const errors = {
      emailError: "",
      contactError: "",
    };

    if(this.state.email.indexOf("@") === -1){
        isError = true;
        errors.emailError = "Require Valid Email Address";
    }

    if (this.state.contact.length < 10) {
      isError = true;
      errors.contactError = "Mobile Number must be at least 10 numbers";
    }

    if ("contact" !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(this.state.contact)) {
        isError = true;
        errors.contactError = "Please enter only number.";
      } else if (this.state.contact.length < 10) {
        isError = true;
        errors.contactError = "Please enter valid phone number.";
      }
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  onSubmit(e) {
    e.preventDefault();

    const obj = {
      username: this.state.username,
      email: this.state.email,
      contact: this.state.contact,
    };
    axios
      .post(
        "http://localhost:3000/admin/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Edit Admin successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        this.props.history.push("/admins");
      })
      .catch((err) => {
        console.log(console.err.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  }

  render() {
    return (
      <div style={{ marginTop: 50, marginRight: 400, marginLeft: 400 }}>
        <h3>
          <center>Update Admin</center>
        </h3>
        <button
          class="btn btn-danger"
          style={{ marginLeft: 15, marginBottom: 10 }}
        >
          <Link to={"/admins"} style={{ textDecoration: "none" }}>
            Back
          </Link>
        </button>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div
              className="form-group"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                disabled
              />
              <span className="text-danger">{this.state.nameError}</span>
            </div>

            <div
              className="form-group"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <label>Email Address:</label>
              <input
                type="email"
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                required
              />
            </div>

            <div
              className="form-group"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <label>Mobile Number:</label>
              <input
                type="text"
                className="form-control"
                value={this.state.contact}
                onChange={this.onChangeContact}
                required
              />
              <span className="text-danger">{this.state.contactError}</span>
            </div>

            <br />

            <div
              className="form-group"
              style={{ marginLeft: 475, marginTop: 30 }}
            >
              <input
                type="submit"
                value="Update Admin"
                className="btn btn-success"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
