import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EditProduct extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            price: '',

            titleError: '',
            priceError: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/product/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    price: response.data.price,
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    validate = () => {
        let isError = false;

        const errors = {
            titleError: "",
            priceError: ""
        };

        if (this.state.title.length < 3) {
            isError = true;
            errors.titleError = "Title must be at least 3 characters";
        }

        if (this.state.price.length < 10) {
            isError = true;
            errors.priceError = "Enter a valid price";
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
            title: this.state.title,
            description: this.state.description,
            price: this.state.price
        };
        axios.post('http://localhost:3000/product/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        alert('Edit Product Successfully')
        this.props.history.push('/products');
    }

    render() {
        return (
            <div style={{ marginTop: 50, marginRight: 400, marginLeft: 400 }}>
                <h3><center>Update Product</center></h3>
                <button class="btn btn-danger" style={{ marginLeft: 15, marginBottom: 10 }} ><Link to={"/products"} style={{ textDecoration: 'none' }}>Back</Link></button>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group" style={{ marginTop: 20, marginBottom: 20 }}>
                            <label>Title:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                required
                            />
                            <span className="text-danger">{this.state.titleError}</span>
                        </div>

                        <div className="form-group" style={{ marginTop: 20, marginBottom: 20 }}>
                            <label>Description:</label>
                            <input type="description"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                required
                            />
                        </div>

                        <div className="form-group" style={{ marginTop: 20, marginBottom: 20 }}>
                            <label>Price:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                                required
                            />
                            <span className="text-danger">{this.state.priceError}</span>
                        </div>

                        <br />

                        <div className="form-group" style={{ marginLeft: 475, marginTop: 30 }}>
                            <input type="submit" value="Update Product" className="btn btn-success" />
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
