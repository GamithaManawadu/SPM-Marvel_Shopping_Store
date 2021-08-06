import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
import { getUserToken } from "../../../auth/userAuth";

const ResearchPaperApproval = () => {
  const { id } = useParams();
  let [card, setCard] = useState([]);
  const [btnClick, setbtnClick] = useState(false);

  useEffect(async () => {
    const resCard = await fetch(`${BASE_URL}/publication/pending/${id}`, {
      method: "GET",
      headers: {
        authToken: getUserToken(),
      },
    });

    const data = await resCard.json();
    setCard(data.card);
    setbtnClick(true);
  }, []);
  console.log(card);
  const Approvehandle = async (id) => {
    const res = await fetch(`${BASE_URL}/publication/approve/${id}`, {
      method: "PATCH",
      headers: {
        authToken: getUserToken(),
      },
    });

    if (res.ok) {
      toast.success("Successfully Approved");
      setbtnClick(id);
    }
  };

  const Rejecthandle = async (id) => {
    const res = await fetch(`${BASE_URL}/publication/reject/${id}`, {
      method: "PATCH",
      headers: {
        authToken: getUserToken(),
      },
    });
    if (res.ok) {
      toast.success("Successfully Rejected");
      setbtnClick(id);
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h3>Researcher Paper Request</h3>
      <hr></hr>
      <div className="reviewer-research-card-container">
        <div className="reviewer-research-card">
          <div>
            <div>
              <span className="reviewer-research-date">Created Date</span>
            </div>
            <hr></hr>
            <span className="reviewer-research-date">{card.createdAt}</span>
          </div>
          <header>
            <hr></hr>
            <h2>{card.topic}</h2>
          </header>

          <div>
            <tr>
              <td>
                <div>
                  <Link
                    to={{
                      pathname: card.src,
                    }}
                    target="blank"
                  >
                    <div className="cardbtn">Download</div>
                  </Link>
                </div>
              </td>
              <td>
                <button
                  className="cardbtn"
                  onClick={() => Approvehandle(card._id)}
                >
                  Approve
                </button>
              </td>
              <td>
                <button
                  className="cardbtn"
                  onClick={() => Rejecthandle(card._id)}
                >
                  Reject
                </button>
              </td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaperApproval;