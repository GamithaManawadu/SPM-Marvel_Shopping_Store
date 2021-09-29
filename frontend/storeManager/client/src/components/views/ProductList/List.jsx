import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Customer.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  //retrieve
  getUsers() {
    axios.get("http://localhost:3000/product").then((res) => {
      if (res.data.success) {
        this.setState({
          users: res.data.users,
        });
        console.log(this.state.users);
      }
    });
  }

  //delete
  onDelete = (id) => {
    axios.delete(`http://localhost:3000/product/${id}`).then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.username + " Delete Product successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      this.getUsers();
    });
  };

  //Search
  filterData(users, searchKey) {
    const result = users.filter(
      (users) =>
        users.title.toLowerCase().includes(searchKey) ||
        users.description.toLowerCase().includes(searchKey)
    );
    this.setState({ users: result });
  }

  handleTextSearch = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:3000/product/").then((res) => {
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
    const headers = [["Title", "Description", "Price"]];

    const users = this.state.users.map((users) => [
      users.title,
      users.description,
      users.price,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: users,
    };

    doc.setFontSize(25);
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("ProductList.pdf");
  };

  render() {
    return (
      <div className="container">
        <h1 className="h3 mb-3 font-weight-bold">
          <center>List of Products</center>
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
          Download Product Details
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td>{user.price}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/product/edit/${user._id}`}
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