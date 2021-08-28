import React from "react";
import Chart from "../../../components/AdminDashboard/chart/Chart";
import FeatureInfo from "../../../components/AdminDashboard/featureInfo/FeatureInfo";
import Features from "../../../components/AdminDashboard/featureInfo/Features";
import Table from "../../../components/AdminDashboard/table/Table";
import AdminDashboard from "../../../components/AdminDashboard/AdminDashboard";

import "./home.css";

const Adminhome = () => {
  document.title = "MARVEL | Admin Manager";

  return (
    <>
      <div className="home">
        <FeatureInfo />
        <div className="homeWidget">
          <Chart />
          <Table />
        </div>
        <Features />
      </div>
    </>
  );
};

export default Adminhome;
