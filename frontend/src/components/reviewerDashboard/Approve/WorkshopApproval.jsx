import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";

const WorkshopApproval = () => {
  const [pendingWorkshops, setPendingWorkshops] = useState([]);
  const handleId = (id) => {
    //setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/approved`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPendingWorkshops(data.approvedWorkshops);
      });
  }, []);
  return (
    <div>
      <h3>Approved Workshop</h3>
      <table id="customers">
        <tbody>
          <tr>
            <th>Due Date</th>
            <th>Topic</th>
          </tr>
          {pendingWorkshops &&
            pendingWorkshops.map((approvedworkshop) => (
              <tr key={approvedworkshop._id}>
                <td>{approvedworkshop.dueDate}</td>
                <td>{approvedworkshop.topic}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <hr></hr>
    </div>
  );
};

export default WorkshopApproval;