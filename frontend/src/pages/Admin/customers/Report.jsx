import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf'; import 'jspdf-autotable';

export default class ReportList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
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

    //Report generation part starting from here

    exportPDF = () => {

        const unit = "pt";
        const size = "A3"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);

        const title = "Marvel Customer Report ";
        const headers = [["Firstname", "Lastname", "Username", "Email Address", "Mobile Number", "Address"]];

        const users = this.state.users.map(

            users => [
                users.firstname,
                users.lastname,
                users.username,
                users.email,
                users.contactNumber,
                users.address,

            ]
        );

        let content = {
            startY: 50,
            head: headers,
            body: users
        };

        doc.setFontSize(25);
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("CustomerList.pdf")

    }

    filterData(users, searchKey) {
        const result = users.filter((users) =>
            users.email.toLowerCase().includes(searchKey)
        )
        this.setState({ users:result })
    }

    handleTextSearch = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:3000/customer/')
        .then(res => {
            if (res.data.success) {
                this.filterData(res.data.users, searchKey)
            }
        });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 20, marginLeft: 100, marginRight: 100 }}>
                <h5 style={{ marginLeft: 10 }}>Generate pdf file from here</h5>
                <button style={{ marginLeft: 10 }} className="btn btn-success" onClick={() => this.exportPDF()} >Download Customer Details</button>
                <button class="btn btn-danger" style={{ marginLeft: 900, marginBottom: 10 }} ><Link to={"/auth/user/admin/customers"} style={{ textDecoration: 'none' }} >Back</Link></button>
                <div className="col-lg-4 mt-2 mb-3" style={{ marginLeft: 10 }}>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search "
                        name="searchTerm"
                        onChange={this.handleTextSearch} />
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Username</th>
                            <th>Email Address</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                users =>
                                    <tr key={users.id}>
                                        <td>{users.firstname}</td>
                                        <td>{users.lastname}</td>
                                        <td>{users.username}</td>
                                        <td>{users.email}</td>
                                        <td>{users.contactNumber}</td>
                                        <td>{users.address}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}