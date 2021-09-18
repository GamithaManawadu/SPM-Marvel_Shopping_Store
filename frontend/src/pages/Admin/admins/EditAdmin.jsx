import React, { Component } from "react";
import axios from "axios";
import { setErrors } from "./setErrors";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class EditAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      contact: "",
      errors: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    axios.get(`http://localhost:3000/admin/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          username: res.data.user.username,
          email: res.data.user.email,
          contact: res.data.user.contact,
        });
      }
    });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  validate = (email, contact) => {
    const errors = setErrors(email, contact);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { username, email, contact } = this.state;
    if (this.validate(email, contact)) {
      const data = {
        username: username,
        email: email,
        contact: contact,
      };
      console.log(data);
      axios.put(`http://localhost:3000/admin/${id}`, data).then((res) => {
        if (res.data.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Edit Admin successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.props.history.push("/auth/user/admin/admins/");
        }
      });
    }
  };

  render() {
    return (
      <div
        className="container"
        style={{
          width: 900,
          backgroundColor: "#a39d9d",
          borderRadius: 5,
          paddingBottom: 20,
          paddingTop: 20,
        }}
      >
        <div className="col-md-10 mt-3 mx-auto">
          <h1 className="h3 mb-3 font-weight-bold">
            <center>Edit Admin</center>
          </h1>
          <form className="needs-validation" noValidate>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.handleInputChange}
                disabled
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter Email Address"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              {this.state.errors.email && (
                <div className="text-danger">{this.state.errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                name="contact"
                placeholder="Enter Mobile Number"
                value={this.state.contact}
                onChange={this.handleInputChange}
              />
              {this.state.errors.contact && (
                <div className="text-danger">{this.state.errors.contact}</div>
              )}
            </div>

            <button
              className="btn btn-success"
              type="submit"
              onClick={this.onSubmit}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EditAdmin);
