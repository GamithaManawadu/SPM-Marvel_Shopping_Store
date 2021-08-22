import React from 'react'
import {FaUserCircle} from  'react-icons/fa'
import './style/profileCard.css'

const profileCard = () => {

    return (
        <div className="profile" data-testid='outer-div-tag'>
            <FaUserCircle className = "usericon" data-testid='icon'/>
            <h3 className="name" data-testid='h1-tag'>Welcome Back</h3>
        </div>
    )
}

export default profileCard;