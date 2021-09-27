import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import logo from "../../../assets/images/marvel.gif";
import "./NavMain.css"


const Navbar = () => {

	return (
		
			<>
			<Link to="/">
				<img src={logo} alt="nav-logo" className="nav-logo"  />
			</Link>
			<nav  className="navbar-container">
				
					
				
					<Link to={`/dashboard`}>Dashboard</Link>
				
				<Link to="/allproducts">Products</Link>
				<Link to="/blogs">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/user/cart">Cart</Link>

				
			</nav>
			
			
			
		</>
	);

    };
export default Navbar;
