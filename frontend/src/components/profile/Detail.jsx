import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Detail.css"
import Profile from "../../assets/images/profile.png"

const Detail = ({ profile }) => {
	return (
    <div className=" absolute mx-auto bg-white shadow-lg sm:rounded-2xl sm:p-20 top-2  ml-96 my-8 w-full max-w-xl  rounded-lg px-4 pt-2 items-center justify-center">

<div 
        
        
      >
        
        
          <h1 className="h3 mb-3 font-weight-bold">
            Profile Details
          </h1>

          <div className="banner">
					<img src={Profile} alt="profile-image" />
				</div>

          <div className = "form">
          <div className=" form-group">
              <label className=" font-semibold text-24px" for="firstName">
                First Name 
                <br></br>
                <input
                  className="text"
                  type="text"
                  value={profile.firstName}
                />
              </label>
            </div>
            <div className="form-group">
              <label className=" font-semibold text-24px" for="lastname">
                Last Name
                <br></br>
                <input
                  className="text"
                  type="text"
                  value={profile.lastName}
                />
              </label>
            </div>
            <div className=" form-group ">
              <label className=" font-semibold text-24px" for="username">
                User Name
                <br></br>
                <input
                className="text"
                  type="text"
                  value={profile.username}
                />
              </label>
            </div>
            <div className="form-group">
              <label className=" font-semibold text-24px" for="email">
                Email
                <br></br>
                <input
                 className="text"
                  type="text"
                  value={profile.email}
                />
              </label>
            </div>

            <div className="form-group">
              <label className=" font-semibold text-24px" for="mobile">
                Mobile
                <br></br>
                <input
                 className="text"
                  id="mobile"
                  type="text"
                  value={profile.contactNumber}
                />
              </label>
            </div>

            <div className="form-group">
              <label className=" font-semibold text-24px" for="address">
                Address
                <br></br>
                <input
                  className="text"
                  id="mobile"
                  type="text"
                  value={profile.address}
                />
              </label>
            </div>
         
            </div>
      </div>
    </div>
  );
};
export default Detail;