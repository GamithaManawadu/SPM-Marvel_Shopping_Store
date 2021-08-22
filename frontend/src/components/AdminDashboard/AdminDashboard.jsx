import React,{useEffect,useState} from 'react'
import Count from "./count"
import { Link } from "react-router-dom";
import './style/admin.css';
import ProfileCard from './profileCard';
import { BASE_URL } from "../../config/config";
import {getUserToken} from '../../auth/userAuth'

const AdminDashboard = () => {

  let [cCount,setCCount] = useState(0)
  let [Tcontent, setTcontent] = useState([])

  useEffect (async() => {
    const resCustomer = await fetch(`${BASE_URL}/admin/customercount`);
    const customerData = await resCustomer.text()

    setCCount(customerData);

  }, [])
  console.log(Tcontent);
  return (
    <div style={{marginBottom: "100px"}}>
    <ProfileCard/>
    <Count customer={cCount} />
    
  </div>
)
}

export default AdminDashboard;