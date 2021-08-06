import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";

const WorkshopDecline = () => {
  const [rejectedWorkshop, setRejectedWorkshop] = useState([]);
  const handleId = (id) => {
    //setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/rejected`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRejectedWorkshop(data.rejectedWorkshops);
      });
  }, []);
  return (
    <div>
      <h3>Diclined Workshops</h3>

      <table id="customers">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Topic</th>
          </tr>
          {rejectedWorkshop &&
            rejectedWorkshop.map((deletedworkshop) => (
              <tr key={deletedworkshop._id}>
                <td>{deletedworkshop.createdAt}</td>
                <td>{deletedworkshop.topic}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkshopDecline;