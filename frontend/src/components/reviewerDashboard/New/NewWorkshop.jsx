import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";

const NewWorkshop = () => {
  const [pendingWorkshop, setpendingWorkshop] = useState([]);
  const handleId = (id) => {
    //setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/pending`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setpendingWorkshop(data.pendingWorkshops);
      });
  }, []);
  return (
    <div>
      <h3>Workshop Request</h3>
      <hr></hr>
      <div>
        <table id="customers">
          <tr>
            <th>Due Date</th>
            <th>Topic</th>
            <th>View</th>
          </tr>
          {pendingWorkshop &&
            pendingWorkshop.map((workshop) => (
              <tr key={workshop._id}>
                <td>{workshop.dueDate}</td>
                <td>{workshop.topic}</td>
                <td>
                  <div>
                    <Link
                      className="cardbtn"
                      to={`/auth/user/reviewer/workshop/card/${workshop._id}`}
                    >
                      view Card
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </table>
      </div>
      <hr></hr>
    </div>
  );
};

export default NewWorkshop;