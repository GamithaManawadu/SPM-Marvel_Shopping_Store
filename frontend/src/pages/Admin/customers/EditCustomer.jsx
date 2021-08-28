import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Customer.css'

export default class EditUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstname.bind(this);
        this.onChangeLastName = this.onChangeLastname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            contactNumber: '',
            address: '',

            usernameError: '',
            contactNumberError: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/customer/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    email: response.data.email,
                    contact: response.data.contact,
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeContactNumber(e) {
        this.setState({
            contactNumber: e.target.value
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    validate = () => {
        let isError = false;

        const errors = {
            usernameError: "",
            contactNumberError: ""
        };

        if (this.state.name.length < 3) {
            isError = true;
            errors.usernameError = "Username must be at least 3 characters";
        }

        if (this.state.contactNumber.length < 10) {
            isError = true;
            errors.contactNumberError = "Mobile Number must be at least 10 numbers";
        }

        if ("contactNumber" !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(this.state.contactNumber)) {
                isError = true;
                errors.contactNumberError = "Please enter only number.";
            } else if (this.state.contactNumber.length < 10) {
                isError = true;
                errors.contactNumberError = "Please enter valid phone number.";
            }
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            contactNumber: this.state.contactNumber,
            address: this.state.address
        };
        axios.post('http://localhost:3000/customer/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        alert('Edit Customer Successfully')
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div style={{ marginTop: 50, marginRight: 400, marginLeft: 400 }}>
                <h3><center>Update Customer</center></h3>
                <button class="btn btn-danger" style={{ marginLeft: 15, marginBottom: 10 }} ><Link to={"/auth/user/admin/customers"} style={{ textDecoration: 'none' }}>Back</Link></button>
                <div className="container">
                    <form onSubmit={this.onSubmit}>

                    <div className="form-group" style={{ marginTop: 20, marginBottom: 20 }}>
                            <label>Firstname:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                                required
                            />
                            <span className="text-danger">{this.state.nameError}</span>
                        </div>

                    <div className="form-group" style={{ marginTop: 20, marginBottom: 20 }}>
                            <label>Lastname:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                                required
                            />
                            <span className="text-danger">{this.state.nameError}</span>
                        </div>

                        <div className="form-group" style={{ marginTop: 20, marginBottom: 20 }}>
                            <label>Username:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                required
                            />
                            <span className="text-danger">{this.state.nameError}</span>
                        </div>

                        <div className="form-group" style={{ marginTop: 20, marginBottom: 20 }}>
                            <label>Email Address:</label>
                            <input type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                disabled
                            />
                        </div>

                        <div className="form-group" style={{ marginTop: 20, marginBottom: 20 }}>
                            <label>Mobile Number:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.contactNumber}
                                onChange={this.onChangeContactNumber}
                                required
                            />
                            <span className="text-danger">{this.state.contactNumberError}</span>
                        </div>

                        <br />

                        <div className="form-group" style={{ marginLeft: 475, marginTop: 30 }}>
                            <input type="submit" value="Update Customer" className="btn btn-success" />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}