import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

export default class Admintable extends Component {
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
    axios.get("http://localhost:3000/admin").then((res) => {
      if (res.data.success) {
        this.setState({
          users: res.data.users,
        });
        console.log(this.state.users);
      }
    });
  }

  onDelete =(id) => {
    axios.delete(`http://localhost:3000/admin/${id}`).then((res)=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.username + " Delete Admin successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      this.getUsers();
    });
  };

  filterData(users, searchKey) {
    const result = users.filter((users) =>
      users.email.toLowerCase().includes(searchKey)
    );
    this.setState({ users: result });
  }

  handleTextSearch = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:3000/admin/").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.users, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <p>All Admins</p>
        <div className="col-lg-4 mt-2 mb-3" style={{ marginLeft: 20 }}>
          <input
            className="form-control"
            type="search"
            placeholder="Search "
            name="searchTerm"
            onChange={this.handleTextSearch}
          />
        </div>
        {/*<button className="btn btn-secondary">
          <Link
            to={"/auth/user/admin/report"}
            style={{ textDecoration: "none" }}
          >
            Generate Report
          </Link>
    </button>*/}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Email Address</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/auth/user/admin/admins/edit/${user._id}`}
                  >
                    <EditRoundedIcon />
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(user._id)}>
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
