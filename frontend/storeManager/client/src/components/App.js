import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import NavMain from "./views/NavBar/NavMain";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer1"
import UploadProductPage from './views/UploadProductPage/UploadProductPage'
import DetailProductPage from './views/DetailProductPage/DetailProductPage';
import CartPage from './views/CartPage/CartPage';
import CheckoutPage from './views/CheckoutPage/CheckoutPage';
import DeliveryServicesPage from './views/DeliveryServices/DeliveryServicesPage';
import AddDeliveryServicePage from './views/DeliveryServices/AddDeliveryServicePage';
import HistoryPage from './views/HistoryPage/HistoryPage';
import Product from './views/ProductList/List'
import EditProduct from './views/ProductList/EditProduct';
import All from './views/AllProducts/All';
import Report from './views/ProductList/Report';


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavMain />
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route path="/products" component={Product}></Route>
          <Route path="/allproducts" component={All}></Route>
          <Route path="/product/edit/:id" component={EditProduct}></Route>
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
		  <Route exact path="/user/cart/checkout" component={Auth(CheckoutPage, true)} />
          <Route exact path="/payment/history" component={Auth(HistoryPage, true)} />
          <Route exact path="/delivery/deliveryservices" component={Auth(DeliveryServicesPage, true)} />
          <Route exact path="/delivery/add/deliveryservice" component={Auth(AddDeliveryServicePage, true)} />
          <Route exact path="/product/reportlist" component={Report}></Route>

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
