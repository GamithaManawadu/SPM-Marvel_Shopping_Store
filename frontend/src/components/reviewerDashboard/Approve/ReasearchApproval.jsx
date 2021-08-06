import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";

const ResearchApproval = () => {
  const [approvePaper, setApprovedPaper] = useState([]);
  const handleId = (id) => {
    //setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/publication/approved`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApprovedPaper(data.approvedPublications);
      });
  }, []);

  return (
    <div>
      <h3>Approved Research Papers</h3>
      <table id="customers">
        <tr>
          <th>Date</th>
          <th>Topic</th>
        </tr>
        {approvePaper &&
          approvePaper.map((approvedpaper) => (
            <tr key={approvedpaper._id}>
              <td>{approvedpaper.createdAt}</td>
              <td>{approvedpaper.topic}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default ResearchApproval;