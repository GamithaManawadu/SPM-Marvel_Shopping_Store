import React, { useState, useEffect } from "react";
import ReviewerDashboard from "../../components/reviewerDashboard/reviewerDashboard";
import "../styles/Reviewer.css";

const Reviewer = () => {
  document.title = "ICAF | Reviewer";
  return (
    <>
      <ReviewerDashboard />
    </>
  );
};

export default Reviewer;