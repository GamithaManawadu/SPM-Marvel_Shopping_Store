import React, { Component } from "react";
import axios from "axios";
import { setErrors } from "./setErrors";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { getUserToken } from "../../auth/userAuth";

class EditCustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",  
      lastName: "",
      username: "",
      email: "",
      contactNumber: "",
      address: "",
      errors: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params.id);
    axios.get(`http://localhost:3000/customer/my`,{ headers:{ authToken: getUserToken(),}, }).then((res) => {
          
      
    if (res.data.success) {
        this.setState({
          firstName: res.data.user.firstName,  
          lastName: res.data.user.lastName,
          username: res.data.user.username,
          email: res.data.user.email,
          contactNumber: res.data.user.contactNumber,
          address: res.data.user.address,
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

  validate = (email, contactNumber) => {
    const errors = setErrors(email, contactNumber);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { firstName, lastName, username, email, contactNumber, address } = this.state;
    if (this.validate(email, contactNumber)) {
      const data = {
        firstName: firstName,  
        lastName: lastName,
        username: username,
        email: email,
        contactNumber: contactNumber,
        address: address,
      };
      console.log(data);
      axios.put(`http://localhost:3000/customer/updateUserProfile`, data).then((res) => {
        if (res.data.success) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Edit customer successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.props.history.push("/auth/user/customer/dashboard");
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
            <center>Edit Customer</center>
          </h1>
          <form className="needs-validation" noValidate>

          <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="Enter First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder="Enter Lastname"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                
              />
            </div>

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
                value={this.state.contactNumber}
                onChange={this.handleInputChange}
              />
              {this.state.errors.contactNumber && (
                <div className="text-danger">{this.state.errors.contactNumber}</div>
              )}
            </div>


            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Enter Address"
                value={this.state.address}
                onChange={this.handleInputChange}
                
              />
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

export default withRouter(EditCustomerProfile);
