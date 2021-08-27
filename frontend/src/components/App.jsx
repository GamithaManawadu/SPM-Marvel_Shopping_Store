import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./private/PrivateRoute";
import PrivateStoreManagerRoute from "./private/PrivateStoreManagerRoute";
import "./app.css";

import Navbar from "../components/nav/Navbar";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin.dashboard";
import Contact from "../pages/Contact";

import EditCustomer from "../pages/Admin/customers/EditCustomer";
import CustomerReport from "../pages/Admin/customers/Report";
import Customers from "../pages/Admin/customers/Customer";
import Admintable from "../pages/Admin/admins/Admintable";
import Delivery from "../pages/DeliveryManager.dashboard";
import Customer from "../pages/Customer";
import StoreManagerDashboard from "../pages/StoreManagerDashboard";

const App = () => {

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				
				<Route exact path="/about">
					<About />
				</Route>
				<PrivateRoute exact path="/blogs">
					<About />
				</PrivateRoute>
				<PrivateRoute exact path="/contact">
					<Contact />
				</PrivateRoute>
				<Route exact path="/auth/register">
					<Register />
				</Route>
				<Route exact path="/auth/login">
					<Login />
				</Route>



				<Route exact path="/auth/user/admin/dashboard">
				<Admin />  
				</Route>
            
				<Route path="/customers" component={Customers}></Route>           
				
				

				<PrivateRoute exact path="/auth/user/admin/customer/edit/:id">
					<EditCustomer />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/admin/customer/report">
					<CustomerReport />
				</PrivateRoute>
					
				
				



				<PrivateRoute exact path="/auth/user/admin/dashboard">
					<Admin />
					
				</PrivateRoute>




				<PrivateRoute exact path="/auth/user/delivery/dashboard">
					<Delivery />
				</PrivateRoute>						
				<PrivateRoute exact path="/auth/user/customer/dashboard">
					<Customer />
				</PrivateRoute>
				<PrivateStoreManagerRoute exact path="/auth/user/storemanager/dashboard">
					<StoreManagerDashboard/>
				</PrivateStoreManagerRoute>
			</Switch>
		</Router>
	);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <PrivateRoute exact path="/blogs">
          <About />
        </PrivateRoute>
        <PrivateRoute exact path="/contact">
          <Contact />
        </PrivateRoute>
        <Route exact path="/auth/register">
          <Register />
        </Route>
        <Route exact path="/auth/login">
          <Login />
        </Route>
        <Route exact path="/auth/user/admin/dashboard">
          <Admin />
        </Route>
        <PrivateRoute exact path="/auth/user/admin/customers">
          <Customers />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/customer/edit/:id">
          <EditCustomer />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/customer/report">
          <CustomerReport />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/dashboard">
          <Admin />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/delivery/dashboard">
          <Delivery />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/customer/dashboard">
          <Customer />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/dashboard">
          <Admintable />
        </PrivateRoute>
        <PrivateStoreManagerRoute exact path="/auth/user/storemanager/dashboard">
          <StoreManagerDashboard />
        </PrivateStoreManagerRoute>
      </Switch>
    </Router>
  );

};

export default App;
