import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./private/PrivateRoute";
import PrivateStoreManagerRoute from "./private/PrivateStoreManagerRoute";
import "./app.css";

import Navbar from "../components/nav/Navbar";
import Sidebar from "./AdminDashboard/sidebar/sidebar";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";

import EditCustomer from "../pages/Admin/customers/EditCustomer";
import CustomerReport from "../pages/Admin/customers/Report";
import Customers from "../pages/Admin/customers/Customer";
import Admintable from "../pages/Admin/admins/Admintable";
import EditAdmin from "../pages/Admin/admins/EditAdmin";
import AdminReport from "../pages/Admin/admins/Report";
import Delivery from "../pages/DeliveryManager.dashboard";
import Customer from "../pages/Customer";
import StoreManagerDashboard from "../pages/StoreManagerDashboard";
import Adminhome from "../pages/Admin/Home/Adminhome";
import Feedback from "../pages/Admin/feedbacks/Feedback";

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
        <PrivateRoute exact path="/auth/user/customer/dashboard">
          <Customer />
        </PrivateRoute>
      </Switch>
      <Switch>
        <PrivateRoute exact path="/auth/user/admin/dashboard">
          <Sidebar />
          <Adminhome />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/customers">
        <Sidebar />
          <Customers />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/customer/edit/:id">
          <Sidebar />
          <EditCustomer />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/customer/report">
          <Sidebar />
          <CustomerReport />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/admins">
          <Sidebar />
          <Admintable />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/admins/edit/:id">
          <Sidebar />
          <EditAdmin />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/report">
          <Sidebar />
          <AdminReport />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/feedbacks">
          <Sidebar />
          <Feedback />
        </PrivateRoute>
        <PrivateStoreManagerRoute
          exact
          path="/auth/user/storemanager/dashboard"
        >
          <Sidebar />
          <StoreManagerDashboard />
        </PrivateStoreManagerRoute>
        <PrivateRoute exact path="/auth/user/delivery/dashboard">
          <Sidebar />
          <Delivery />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
