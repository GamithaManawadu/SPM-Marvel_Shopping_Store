import React from "react";
import { Link } from "react-router-dom";
const DeliveryDashboard = () => {
  return (
    <div>
      <div>
      <Link className="button" to={`/auth/user/delivery/add/deliveryservice`}>
        Add New Delivery Service
      </Link>
    </div>
    <div>
      <Link className="button1" to={`/auth/user/delivery/deliveryservices`}>
        Delivery Services
      </Link>
      </div>
      <div>
      <Link className="button2" to={`/`}>
        Delivery Services
      </Link>
      </div>
    </div>
);
};

export default DeliveryDashboard;