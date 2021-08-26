import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope,FaPhoneSquareAlt } from "react-icons/fa";
//import { RegisterDataContext } from "../../context/RegisterFormContext";
import { BASE_URL } from "../../config/config";


// const AddDeliveryServiceForm = () => {
// 	const { setCurrentStep, setUserData, userData } =
// 		useContext(RegisterDataContext);
// 	const history = useHistory();

// 	const handleRegister = async (e) => {
// 		e.preventDefault();
		
// 		try {
// 			const response = await fetch(`${BASE_URL}/customer/create`, {
// 				method: "POST",
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 				body: JSON.stringify(userData),
// 			});

// 			if (response.ok) {
// 				toast.success("Your account has been created");
// 				history.push("/auth/login");
// 			} else {
// 				toast.error("Sorry, something went wrong");
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

const initialState = {
    dservicename: '',
    contactno: '',
    email: '',
    noofvehicles: '',
    noofdrivers: '',
    chargeperkm: '',
    startdate: '',
}

class AddDeliveryServiceForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = async (e) => {
      e.preventDefault();
      let deliveryservice = {
        dservicename: this.state.dservicename,
        contactno: this.state.contactno,
        email: this.state.email,
        noofvehicles: this.state.noofvehicles,
        noofdrivers: this.state.noofdrivers,
        chargeperkm: this.state.chargeperkm,
        startdate: this.state.startdate
      }
      console.log('Data to Send', deliveryservice);
	  
	  await axios.post(`${BASE_URL}/deliveryservice/add`, deliveryservice)
      .then(response => {
		  console.log("Data successfully inserted");
		//   window.location.reload(false);
		  this.props.history.push('/auth/user/delivery/dashboard');
		  toast.success('Delivery Service Data successfully inserted');
      })
      .catch(error => {
		  //toast.error("Sorry, something went wrong");
          console.log(error.message);
		  toast.error(error.message);
      })

  }

  render() {
	return (
		<div className="deliveryservice-content">
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			
			<form
				className="delivery-service-form"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
				onSubmit={this.onSubmit}
			>
				<h2>Add New Delivery Service</h2>
                <br/>
				<div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
                    <label htmlFor="dservicename">Delivery Service Name </label>
					<input
						type="text"
						name="dservicename"
						id="dservicename"
						placeholder="Delivery Service Name"
						required
						autoComplete="off"
						value={this.state.dservicename} 
                        onChange={this.onChange}
					/>
                    <br/>
					<label htmlFor="email">Email <FaEnvelope/></label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="john@example.com"
						required
						autoComplete="off"
						value={this.state.email} 
                        onChange={this.onChange}
					/>
                    <br/>
					<label htmlFor="contactno">Contact Number <FaPhoneSquareAlt/></label>
					<input
						type="tel"
						name="contactno"
						id="contactno"
                        placeholder="0112003000"
						required
						maxLength="10"
						autoComplete="off"
						value={this.state.contactno} 
                        onChange={this.onChange}
					/>
                    <br/>
                    <label htmlFor="noofvehicles">No of Vehicles </label>
					<input
						type="number"
						name="noofvehicles"
						id="noofvehicles"
                        placeholder="0"
						required
						min="0"
						autoComplete="off"
						value={this.state.noofvehicles} 
                        onChange={this.onChange}
					/>
                    <br/>
					<label htmlFor="noofdrivers">No of Drivers </label>
					<input
						type="number"
						name="noofdrivers"
						id="noofdrivers"
                        placeholder="0"
						required
						min="0"
						autoComplete="off"
						value={this.state.noofdrivers} 
                        onChange={this.onChange}
					/>
                    <br/>
                    <label htmlFor="chargeperkm">Charge Per KM(Rs.)</label>
					<input
						type="number"
						name="chargeperkm"
						id="chargeperkm"
                        placeholder="50.00"
						required
						min="0"
                        step="0.50"
						autoComplete="off"
						value={this.state.chargeperkm} 
                        onChange={this.onChange}
					/>
                    <br/>
                    <label htmlFor="startdate">Added Date </label>
					<input
						type="date"
						name="startdate"
						id="startdate"
						required
						autoComplete="off"
						value={this.state.startdate} 
                        onChange={this.onChange}
					/>
                </div>
				
				<div className="button-container">
					<button
						className="gradient-cta transparent"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						onClick={() => this.props.history.push('/auth/user/delivery/dashboard')}
					>
						Back
					</button>
					<button
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
						// onClick={handleRegister}
					> Add Service 
					{/* <Link to={`/auth/user/delivery/dashboard`}></Link> */}
					</button>
				</div>
			</form>
		</div>
    )
  }
}

export default withRouter(AddDeliveryServiceForm);
