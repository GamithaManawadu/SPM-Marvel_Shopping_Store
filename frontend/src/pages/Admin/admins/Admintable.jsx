import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';


const User = props => (
    <tr>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.username}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.email}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.contact}</td>
        <td>
            <button className="btn btn-warning" ><Link to={"/auth/user/admin/admins/edit/" + props.user._id}><EditRoundedIcon/></Link></button>
            <button className="btn btn-danger" style={{ marginLeft: 10 }} href="/" onClick={() => { props.deleteCustomer(props.user._id) }}><DeleteForeverRoundedIcon/></button>
        </td>
    </tr>
)

export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };

        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/admin/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:3000/admin/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteCustomer(id) {
        axios.delete('http://localhost:3000/admin/' + id)
            .then(res => { console.log(res.data) });

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Delete Admin successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
    }

    userList() {
        return this.state.users.map(currentUser => {
            return <User user={currentUser} deleteCustomer={this.deleteCustomer} key={currentUser.id} />;
        })
    }

    render() {
        return (
            <div style={{ marginTop: 20, marginLeft: 20, width: '100%' }}>
                <h3 style={{ fontWeight: 1000 }}><center>List of Admins</center></h3>
                <button className="btn btn-secondary" style={{ marginLeft: 1200 }} ><Link to={"/auth/user/admin/report"} style={{ textDecoration: 'none' }}>Generate Report</Link></button>
                
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email Address</th>
                            <th>Mobile Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}