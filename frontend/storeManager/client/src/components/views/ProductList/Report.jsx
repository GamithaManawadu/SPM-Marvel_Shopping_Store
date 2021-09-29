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
        axios.get('http://localhost:3000/api/product/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:3000/api/product/')
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

        const title = "Marvel Product Report ";
        const headers = [["Title", "Description", "Price"]];

        const users = this.state.users.map(

            users => [
                users.title,
                users.description,
                users.price
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
        doc.save("ProductList.pdf")

    }

    filterData(users, searchKey) {
        const result = users.filter((users) =>
            users.title.toLowerCase().includes(searchKey)
        )
        this.setState({ users:result })
    }

    handleTextSearch = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:3000/product/')
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
                <button style={{ marginLeft: 10 }} className="btn btn-success" onClick={() => this.exportPDF()} >Download Product Details</button>
                <button class="btn btn-danger" style={{ marginLeft: 900, marginBottom: 10 }} ><Link to={"/products"} style={{ textDecoration: 'none' }} >Back</Link></button>
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
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                users =>
                                    <tr key={users.id}>
                                        <td>{users.title}</td>
                                        <td>{users.description}</td>
                                        <td>{users.price}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}