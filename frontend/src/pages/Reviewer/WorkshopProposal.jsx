import React, { useState, useEffect } from "react";

import WorkshopApproval from "../../components/reviewerDashboard/Approve/WorkshopApproval";
import WorkshopDecline from "../../components/reviewerDashboard/Decline/WorkshopDecline";
import NewWorkshop from "../../components/reviewerDashboard/New/NewWorkshop";

import "../styles/Reviewer.css";
import "../styles/ReviewerTable.css";

const WorkshopProposal = () => {
  document.title = "ICAF | Reviewer";
  return (
    <>
      <WorkshopApproval />
      <WorkshopDecline />
      <NewWorkshop />
    </>
  );
};

export default WorkshopProposal;