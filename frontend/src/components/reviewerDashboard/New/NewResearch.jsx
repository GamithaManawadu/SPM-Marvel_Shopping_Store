import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";
const NewResearch = () => {
  const [pendingPublications, setpendingPublications] = useState([]);
  const handleId = (id) => {
    //setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/publication/pending`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setpendingPublications(data.pendingPublications);
      });
  }, []);
  return (
    <div>
      <h3>Research Paper Request</h3>
      <hr></hr>
      <div>
        <table id="customers">
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>View</th>
          </tr>
          {pendingPublications &&
            pendingPublications.map((paper) => (
              <tr key={paper._id}>
                <td>{paper.createdAt}</td>
                <td>{paper.topic}</td>
                <td>
                  <div>
                    <Link
                      className="cardbtn"
                      to={`/auth/user/reviewer/research/card/${paper._id}`}
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
export default NewResearch;