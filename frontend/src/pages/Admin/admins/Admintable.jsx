import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

export default class UsersList extends Component {
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

  render() {
    return (
      <div className="container">
        <p>All Admins</p>
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
                  <th scope="row">{index+1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>
                      <a className="btn btn-warning" href="#">
                        <EditRoundedIcon/>
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#">
                        <DeleteForeverRoundedIcon/>
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
