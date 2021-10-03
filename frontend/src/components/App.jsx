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
import Profile from "../components/profile/EditCustomer";

import EditCustomer from "../pages/Admin/customers/EditCustomer";

import Customers from "../pages/Admin/customers/Customer";
import Admintable from "../pages/Admin/admins/Admintable";
import EditAdmin from "../pages/Admin/admins/EditAdmin";
import Delivery from "../pages/DeliveryManager.dashboard";
import AddDeliveryService from "../pages/DeliveryManager.addDeliveryService";
import DeliveryServices from "../pages/DeliveryManager.deliveryServices";
import CustomerDelivery from "../pages/DeliveryManager.checkout";
import Customer from "../pages/Customer";
import StoreManagerDashboard from "../pages/StoreManagerDashboard";
import Adminhome from "../pages/Admin/Home/Adminhome";
import Feedback from "../pages/Admin/feedbacks/Feedback";
//import ProductStore from "../components/ProductManager/views/LandingPage/LandingPage"
//import ProductNav from "../components/ProductManager/views/NavBar/NavBar"
import UploadProduct from "../components/storemanagerDashboard/UploadProductPage/UploadProductPageClassComponent"
//import DetailProductPage from "../components/ProductManager/views/DetailProductPage/DetailProductPage"
//import Product from "../components/ProductManager/views/ProductList/List"
//import EditProduct from "../components/ProductManager/views/ProductList/EditProduct"
//import ProductReport from "../components/ProductManager/views/ProductList/Report"
//import Store from "../components/ProductManager/views/AllProducts/All"
//import CartPage from "../components/ProductManager/views/CartPage/CartPage"




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
        <Route exact path="/store">
        <Home />
          </Route>
        <PrivateRoute exact path="/auth/user/customer/cart">
        <Home />
        </PrivateRoute>  

        <PrivateRoute exact path="/auth/user/customer/dashboard">
          <Customer />
        </PrivateRoute>
      </Switch>
      <PrivateRoute exact path="/auth/user/customer/profile">
          <Profile />
        </PrivateRoute>

      <Switch>
        <PrivateRoute exact path="/auth/user/admin/dashboard">
          <Sidebar />
          <Adminhome />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/customers">
          <Sidebar />
          <Customers />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/customers/edit/:id">
          <Sidebar />
          <EditCustomer />
        </PrivateRoute>
        
        
        <PrivateRoute exact path="/auth/user/admin/admins">
          <Sidebar />
          <Admintable />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/admins/edit/:id">
          <Sidebar />
          <EditAdmin />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/feedbacks">
          <Sidebar />
          <Feedback />
        </PrivateRoute>

        <PrivateRoute exact path="/auth/user/store/dashboard">
          <Sidebar />
          <Adminhome />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/store/home">
        <Sidebar />
        <UploadProduct />
       
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/store/product/upload">
        <Sidebar />
        <Adminhome />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/store/product/:productId">
        <Sidebar />
        <Adminhome />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/store/products">
        <Sidebar />
        <Adminhome />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/store/product/edit/:id">
        <Sidebar />
        <Adminhome />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/admin/store/product/report">
        <Sidebar />
        <Adminhome />
        </PrivateRoute>
        


        

        <PrivateRoute exact path="/auth/user/delivery/dashboard">
          <Delivery />
          {/* <Sidebar /> */}
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/delivery/add/deliveryservice">
          <AddDeliveryService />
        </PrivateRoute>
        <PrivateRoute exact path="/auth/user/delivery/deliveryservices">
          <DeliveryServices />
        </PrivateRoute>
        <PrivateRoute
          exact
          path="/auth/user/delivery/customer/deliveryservices"
        >
          <CustomerDelivery />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
