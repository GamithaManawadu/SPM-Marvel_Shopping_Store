import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Customer.css';
import jsPDF from "jspdf";
import "jspdf-autotable";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";

const User = props => (
    <tr>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.title}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.description}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.price}</td>
        <td>
            <button className="btn btn-warning" ><Link to={"/product/edit/" + props.user._id}><i className="far fa-edit"></i><EditRoundedIcon />Edit</Link></button>
            <button className="btn btn-danger" style={{ marginLeft: 10 }} href="/" onClick={() => { props.deleteProduct(props.user._id) }}><i className="far fa-trash-alt"></i><DeleteForeverRoundedIcon />Delete</button>
        </td>
    </tr>
)




export default class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/product/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:3000/product/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteProduct(id) {
        axios.delete('http://localhost:3000/product/' + id)
            .then(res => { console.log(res.data) });

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
        alert('Delete product Successfully')
    }

    productList() {
        return this.state.users.map(currentUser => {
            return <User user={currentUser} deleteProduct={this.deleteProduct} key={currentUser.id} />;
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

            (users) => [
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
    doc.save("ProductList.pdf");
  };

    render() {
        return (
            <div style={{ marginTop: 20, marginLeft: 20, width: '100%' }}>
                <h3><center>List of Products</center></h3>
                <button
          style={{ marginLeft: 20 }}
          className="btn btn-success"
          onClick={() => this.exportPDF()}
        >
          Download Product Details
        </button>
                
                <table id= "table" className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList()}
                    </tbody>
                </table>
            </div>
        )
    }
}