import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from "../../../config/config";
import {getUserToken} from '../../../auth/userAuth';



const User = props => (
    <tr>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.firstName}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.lastName}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.username}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.email}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.contactNumber}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.address}</td>
        <td>
            <button className="btn btn-warning" ><Link to={"/auth/user/admin/customer/edit/" + props.user._id}><i className="far fa-edit"></i></Link>Edit</button>
            <button className="btn btn-danger" style={{ marginLeft: 10 }} href="/" onClick={() => { props.deleteCustomer(props.user._id) }}><i className="far fa-trash-alt"></i>Remove</button>
        </td>
    </tr>
)

export default class CustomersList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            
            users: []
            
         };

        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/customer/')
       
        .then(response => {
            this.setState({ users: response.data });
        })
        .catch(function (error) {
            console.log(error);
        })
}

    componentDidUpdate() {
        axios.get('http://localhost:3000/customer/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteCustomer(id) {
        axios.delete('http://localhost:3000/customer/' + id)
        .then(res => { console.log(res.data) });
           

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
        alert('Deleted customer Successfully')
    }

    customerList() {
        return this.state.users.map(currentUser => {
            return <User user={currentUser} deleteCustomer={this.deleteCustomer} key={currentUser.id} />;
        })
    }

    render() {
        return (
            <div style={{ marginTop: 20, marginLeft: 20, width: '100%' }}>
                <h3><center>List of Customers</center></h3>
                <button className="btn btn-dark" style={{ marginLeft: 1200 }} ><Link to={"/auth/user/admin/customer/report"} style={{ textDecoration: 'none' }}>Generate Report</Link></button>
                
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                            <th>Email Address</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.customerList()}
                    </tbody>
                </table>
            </div>
        )
    }
}