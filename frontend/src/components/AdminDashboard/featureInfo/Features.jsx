import "./FeatureInfo.css";
import React, { useEffect, useState } from "react";
import Count from "../count";
import { BASE_URL } from "../../../config/config";
import PeopleOutlineRoundedIcon from "@material-ui/icons/PeopleOutlineRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";


export default function Features() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featureTitle">REGISTERED CUSTOMERS</span>
        <div className="featuredAmountContainer">
          <span className="featuredAmount">22</span>
          <PeopleOutlineRoundedIcon className="featuredIcon" />
        </div>
      </div>
      <div className="featuredItem">
        <span className="featureTitle">DAILY ORDERS</span>
        <div className="featuredAmountContainer">
          <span className="featuredAmount">320</span>
          <ShoppingCartRoundedIcon className="featuredIcon" />
        </div>
      </div>
    </div>
  );
};


