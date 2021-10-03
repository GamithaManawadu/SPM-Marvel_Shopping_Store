import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ConfirmModal from "../modals/ConfirmModal";
// import { useParams } from "react-router-dom";
import Error from "../toasts/Error";
import Success from "../toasts/Success";
import axios from "axios";
import { getUserToken } from "../../auth/userAuth";

const EditCustomer = () => {
  const history = useHistory();
  const [userDetail, setUserDetail] = useState({});
  const [useId, setUserId] = useState("");
  const [Popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [buttonStatus, setButtonStatus] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [updateUser, setUpdatUser] = useState({
    firstName:"",
    lastName:"",
    username: "",
    email: "",
    contactNumber: "",
    address:""
  });

  const getCustomerDetails = async () => {
    try {
      const res = await axios.get("http://localhost:3000/customer/my", {
        headers: {
          
          authToken: getUserToken(),
        },
      }
      );
      
      setUpdatUser(res.data.customer);
      // setIsLoading(false);
      // setUserDetail(res.data.customer);
    } catch (err) {
      console.error(err.message);
    }
  };

  const saveUpdatedUser = async (e) => {
    e.preventDefualt();
    setButtonStatus(true);
    try {
      
      const res = await axios.put(`"http://localhost:3000/customer/updateUserProfile`,
      
      updateUser);
      setButtonStatus(false);
      setUpdatUser({
        firstName:"",
        lastName:"",
        username: "",
        email: "",
        contactNumber: "",
        address:""
      });
      setSuccess("User updated successfully.");
      getCustomerDetails();
      setTimeout(() => history.push("/auth/user/customer/dashboard"), 2000);
    } catch (err) {
      setError(err.response);
      console.log(err.response);
      setButtonStatus(false);
    }
  };
  useEffect(() => {
    getCustomerDetails();
  }, []);

  const deleteprofile = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3000/customer/deleteProfile");
      console.log(id);
      if (res.status === 200) {
        setPopup(false);
        const logout = async () => {
          await axios.get("/users/logout");

          history.push("/");
        };
        logout();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {Popup && (
        <ConfirmModal
          setShowModal={setPopup}
          showModal={Popup}
          execute={deleteprofile}
          id={useId}
        />
      )}
      
      <div className=" absolute mx-auto bg-white shadow-lg sm:rounded-2xl sm:p-20 top-2  ml-96 my-8 w-full max-w-xl  rounded-lg px-4 pt-2 items-center justify-center">
        <div className="w-full text-center flex justify-center">
          {error && <Error error={error} top="-top-2" />}
          {success && <Success success={success} top="-top-2" />}
        </div>
        <h1 className="text-5xl font-extrabold pb-10 text-center">
          Edit profile
        </h1>
        {/* <div className="relative w-24 h-24">
        <img
          className="rounded-full border border-gray-100 shadow-sm"
          src={EditButto}
          alt="user image"
        />
      </div> */}
        <form
          className="w-2/4 text-gray-800 font-semibold relative"
          onSubmit={saveUpdatedUser}
          encType="multipart/form-data"
        >

          <div className=" mb-4 ">
            <label className=" font-semibold text-24px" for="firstname">
              First Name
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-gray-400 border-opacity-100 text-gray-600 "
                id="firstname"
                type="text"
                value={updateUser.firstName}
                onChange={(e) =>
                  setUpdatUser({ ...updateUser, firstName: e.target.value })
                }
              />
            </label>
          </div>

          <div className=" mb-4 ">
            <label className=" font-semibold text-24px" for="lastname">
             Last Name
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-gray-400 border-opacity-100 text-gray-600 "
                id="lastname"
                type="text"
                value={updateUser.lastName}
                onChange={(e) =>
                  setUpdatUser({ ...updateUser, lastName: e.target.value })
                }
              />
            </label>
          </div>

          <div className=" mb-4 ">
            <label className=" font-semibold text-24px" for="username">
              User Name
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-gray-400 border-opacity-100 text-gray-600 "
                id="username"
                type="text"
                value={updateUser.username}
                onChange={(e) =>
                  setUpdatUser({ ...updateUser, username: e.target.value })
                }
              />
            </label>
          </div>

          <div className="mb-6">
            <label className=" font-semibold text-24px" for="email">
              Email
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-gray-400 border-opacity-100 text-gray-600"
                id="email"
                type="text"
                value={updateUser.email}
                onChange={(e) =>
                  setUpdatUser({ ...updateUser, email: e.target.value })
                }
              />
            </label>
          </div>
          
          <div className="mb-8">
            <label className=" font-semibold text-24px" for="mobile">
              Mobile
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-gray-400 border-opacity-100 text-gray-600"
                id="mobile"
                type="text"
                value={updateUser.contactNumber}
                onChange={(e) =>
                  setUpdatUser({ ...updateUser, contactNumber: e.target.value })
                }
              />
            </label>
          </div>

          <div className="mb-8">
            <label className=" font-semibold text-24px" for="address">
              Address
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-gray-400 border-opacity-100 text-gray-600"
                id="address"
                type="text"
                value={updateUser.address}
                onChange={(e) =>
                  setUpdatUser({ ...updateUser, address: e.target.value })
                }
              />
            </label>
          </div>

          <div className="space-x-4">
            <button
              className="transition duration-500 ease-in-out  py-2 px-4 bg-light-blue hover:bg-black text-white sm:rounded-3xl transform hover:-translate-y-1 hover:scale-110 "
              to={`/auth/user/customer/profile`}
            >
              Edit
            </button>
          </div>
        </form>
        <button
          className="transition duration-500 ease-in-out  py-2 px-4 bg-red-400 hover:bg-black text-white sm:rounded-3xl transform hover:-translate-y-1 hover:scale-110 "
          onClick={() => {
            setPopup(true);
            setUserId(userDetail._id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default EditCustomer;