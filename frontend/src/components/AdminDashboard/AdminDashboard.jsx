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
<h2>*Once You Approved a document it will be published in the system.</h2>

<h2>*Once You rejected a document it will be deleted from the system.</h2>
<div className="draw">
      <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>

         
     
  
<br/>
<br/>
<br/>
<br/>


<a ><Link className="button" to={`/auth/user/admin/customers`}>Customer List</Link> </a>
<a ><Link className="button" to={`/auth/user/admin/customer/edit/:id`}>Approved Workshop Proposals</Link> </a>
<a ><Link className="button1" to={`/auth/user/admin/customer/report`}>Research Papers to be Reviewed</Link> </a>



</Drawer>
</div>
</div>
</>
)
}


export default AdminDashboard;