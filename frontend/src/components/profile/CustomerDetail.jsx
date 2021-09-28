import axios from "axios";
import React, { useState, useEffect } from "react";
import Detail from './Detail'


const CustomerDetail = () => {
  const [userDetail, setUserDetail] = useState({});

  useEffect(async () => {
   
    
      const result = await fetch("http://localhost:3000/customers/userProfile",{
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userDetail = await result.json();
      setUserDetail(userDetail.customer);
      
    }, []);
  return (
    <div>
    
      
    </div>
  );
};

export default CustomerDetail;