import React, { Component } from 'react';
import axios from 'axios';


const Feedback = props => (
    <tr>
        <td className={props.feedback.completed ? 'completed' : ''}>{props.feedback.email}</td>
        <td className={props.feedback.completed ? 'completed' : ''}>{props.feedback.message}</td>
        <td>
            <button className="btn btn-danger" style={{ marginLeft: 10 }} href="/" onClick={() => { props.deleteFeedback(props.feedback._id) }}><i className="far fa-trash-alt"></i></button>
        </td>
    </tr>
)

export default class FeedbacksList extends Component {

    constructor(props) {
        super(props);
        this.state = { feedbacks: [] };

        this.deleteFeedback = this.deleteFeedback.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3000/feedback/')
            .then(response => {
                this.setState({ feedbacks: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:3000/feedback/')
            .then(response => {
                this.setState({ feedbacks: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteFeedback(id) {
        axios.delete('http://localhost:3000/feedback/' + id)
            .then(res => { console.log(res.data) });

        this.setState({
            feedbacks: this.state.feedbacks.filter(el => el._id !== id)
        })
        alert('Delete feedback Successfully')
    }

    feedbackList() {
        return this.state.feedbacks.map(currentFeedback => {
            return <Feedback feedback={currentFeedback} deleteFeedback={this.deleteFeedback} key={currentFeedback.id} />;
        })
    }

    render() {
        return (
            <div style={{ marginTop: 30, width: '100%' }}>
                <h3><center>List of Feedbacks</center></h3>
                <table className="table table-striped" style={{ marginTop: 40 }}>
                    <thead>
                        <tr>
                            <th>Email Address</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.feedbackList()}
                    </tbody>
                </table>
            </div>
        )
    }
}