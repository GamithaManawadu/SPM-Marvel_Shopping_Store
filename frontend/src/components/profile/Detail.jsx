import axios from "axios";
import React, { useState, useEffect } from "react";

const Detail = ({ profile }) => {
	return (
        <div>

<div
        className="col-md-10 mt-3 mx-auto"
        
      >
        
          <h1 className="h3 mb-3 font-weight-bold">
            Profile Details
          </h1>

          
          <div className=" form-group">
              <label className=" font-semibold text-24px" for="firstName">
                First Name 
                <input
                  className=" form-control"
                  type="text"
                  value={profile.firstName}
                />
              </label>
            </div>
            <div className="form-group">
              <label className=" font-semibold text-24px" for="lastname">
                Last Name
                <input
                  className=" form-control"
                  type="text"
                  value={profile.lastName}
                />
              </label>
            </div>
            <div className=" form-group ">
              <label className=" font-semibold text-24px" for="username">
                User Name
                <input
                  className="form-control"
                  type="text"
                  value={profile.username}
                />
              </label>
            </div>

            <div className="form-group">
              <label className=" font-semibold text-24px" for="email">
                Email
                <input
                  className="form-control"
                  type="text"
                  value={profile.email}
                />
              </label>
            </div>

            <div className="form-group">
              <label className=" font-semibold text-24px" for="mobile">
                Mobile
                <input
                  className="form-control"
                  id="mobile"
                  type="text"
                  value={profile.contactNumber}
                />
              </label>
            </div>

            <div className="form-group">
              <label className=" font-semibold text-24px" for="address">
                Address
                <input
                  className="form-control"
                  id="mobile"
                  type="text"
                  value={profile.address}
                />
              </label>
            </div>
         
        
      </div>
    </div>
  );
};
export default Detail;