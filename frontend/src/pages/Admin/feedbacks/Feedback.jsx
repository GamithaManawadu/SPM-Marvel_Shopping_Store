import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import Swal from "sweetalert2";

class FeedbacksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
    };
  }

  componentDidMount() {
    this.getFeedbacks();
  }

  getFeedbacks() {
    axios.get("http://localhost:3000/feedback").then((res) => {
      if (res.data.success) {
        this.setState({
          feedbacks: res.data.feedbacks,
        });
        console.log(this.state.feedbacks);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:3000/feedback/${id}`).then((res) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Delete Feedback successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      this.getFeedbacks();
    });
  };

  render() {
    return (
        <div className="container">
        <h1 className="h3 mb-3 font-weight-bold">
          <center>List of Feedbacks</center>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Email Address</th>
              <th scope="col">Message</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.feedbacks.map((feedback, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{feedback.email}</td>
                <td>{feedback.message}</td>
                <td>
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(feedback._id)}
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

export default withRouter(FeedbacksList);