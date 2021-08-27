import React,{useEffect,useState} from 'react'
import Count from "./count"
import { Link } from "react-router-dom";
import './style/admin.css';
import ProfileCard from './profileCard';
import { BASE_URL } from "../../config/config";
import {getUserToken} from '../../auth/userAuth'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


const AdminDashboard = () => {


  const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  let [cCount,setCCount] = useState(0)
  let [Tcontent, setTcontent] = useState([])

  useEffect (async() => {
    const resCustomer = await fetch(`${BASE_URL}/admin/customercount`);
    const customerData = await resCustomer.text()

    setCCount(customerData);

  }, [])
  console.log(Tcontent);
  return (

    <>
    <div style={{marginBottom: "100px"}}>
    <ProfileCard/>
    <Count customer={cCount} />
    
  </div>


<div className="drawer">



<button class="openbtn" onClick={toggleDrawer}>&#9776; Admin Dashboard</button>
<h2>Drag To View Admin Management Options</h2>


<div className="draw">
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>

         
     
  
<br/>
<br/>
<br/>
<br/>


<a ><Link className="button" to={`/customers`}>Customer List</Link> </a>




</Drawer>
</div>
</div>
</>
)
}


export default AdminDashboard;