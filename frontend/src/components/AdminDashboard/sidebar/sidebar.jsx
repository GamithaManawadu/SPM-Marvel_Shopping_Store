import React, { useContext } from 'react'
import "./sidebar.css"
import {Home, PersonOutlineRounded, ExitToAppRounded, SupervisedUserCircleRounded, FeedbackRounded, LocalShippingRounded, LocalMallRounded } from "@material-ui/icons";

import { deleteUserAuth, getUserType } from "../../../auth/userAuth";
import { RegisterDataContext } from "../../../context/RegisterFormContext";

const Sidebar = () => {
    const { isLogin, setIsLogin } = useContext(RegisterDataContext);

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <a href="/auth/user/admin/dashboard" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><Home className="sidebarIcon" /></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><LocalMallRounded className="sidebarIcon"/></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/auth/user/admin/customers" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><PersonOutlineRounded className="sidebarIcon"/></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><LocalShippingRounded className="sidebarIcon"/></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/auth/user/admin/admins" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><SupervisedUserCircleRounded className="sidebarIcon" /></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/auth/user/admin/feedbacks" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><FeedbackRounded className="sidebarIcon" /></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" onClick={() => { deleteUserAuth(); 
                                                        setIsLogin(false);
							                    }} variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><ExitToAppRounded className="sidebarIconRed" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;