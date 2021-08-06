import React, { useState, useEffect } from "react";


import ResearchApproval from "../../components/reviewerDashboard/Approve/ReasearchApproval";
import ResearchDecline from "../../components/reviewerDashboard/Decline/ResearchDecline";
import NewResearch from "../../components/reviewerDashboard/New/NewResearch";

import "../styles/Reviewer.css";
import "../styles/ReviewerTable.css";

const ResearchPaper = () => {
  return (
    <>
      <ResearchApproval />
      <ResearchDecline />
      <NewResearch />
    </>
  );
};

export default ResearchPaper;