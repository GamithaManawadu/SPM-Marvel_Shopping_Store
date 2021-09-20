import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios.get("http://localhost:3000/customer").then((res) => {
      if (res.data.success) {
        this.setState({
          users: res.data.users,
        });
        console.log(this.state.users);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:3000/customer/${id}`).then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.username + " Delete customer successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      this.getUsers();
    });
  };

  filterData(users, searchKey) {
    const result = users.filter(
      (users) =>
        users.email.toLowerCase().includes(searchKey) ||
        users.username.toLowerCase().includes(searchKey)
    );
    this.setState({ users: result });
  }

  handleTextSearch = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:3000/customer/").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.users, searchKey);
      }
    });
  };

  //Report generation part starting from here

  exportPDF = () => {
    const unit = "pt";
    const size = "A3"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    const title = "Marvel Admin Report ";
    const headers = [["Username", "Email Address", "Mobile Number"]];

    const users = this.state.users.map((users) => [
        users.firstName,
        users.lastName,
        users.username,
        users.email,
        users.contactNumber,
        users.address,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: users,
    };

    doc.setFontSize(25);
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("CustomerList.pdf");
  };

  render() {
    return (
      <div className="container">
        <h1 className="h3 mb-3 font-weight-bold">
          <center>List of Customers</center>
        </h1>
        <div className="col-lg-4 mt-2 mb-3">
          <input
            style={{ backgroundColor: "#e0dfda" }}
            className="form-control"
            type="search"
            placeholder="Search "
            name="searchTerm"
            onChange={this.handleTextSearch}
          />
        </div>
        <button
          style={{ marginLeft: 20 }}
          className="btn btn-success"
          onClick={() => this.exportPDF()}
        >
          Download Customer Details
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email Address</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.contactNumber}</td>
                <td>{user.address}</td>

                <td>
                  <a
                    className="btn btn-warning"
                    href={`/auth/user/admin/customers/edit/${user._id}`}
                  >
                    <EditRoundedIcon />
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(user._id)}
                  >
                    <DeleteForeverRoundedIcon />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
