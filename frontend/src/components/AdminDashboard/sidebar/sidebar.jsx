import React from 'react'
import "./sidebar.css"
import {Home, ExitToAppRounded, SettingsApplicationsRounded, PersonOutlineRounded, SupervisedUserCircleRounded, FeedbackRounded, PaymentRounded, LocalMallRounded } from "@material-ui/icons";

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><Home className="sidebarIcon" /></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><LocalMallRounded className="sidebarIcon"/></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><PersonOutlineRounded className="sidebarIcon"/></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><PaymentRounded className="sidebarIcon"/></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/admins" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><SupervisedUserCircleRounded className="sidebarIcon" /></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><FeedbackRounded className="sidebarIcon" /></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><SettingsApplicationsRounded className="sidebarIconBlack"/></a>
                        </li>
                        <li className="sidebarListItem">
                            <a href="/" variant="body2" className="nav-link" style={{ textDecoration: 'none' }}><ExitToAppRounded className="sidebarIconRed"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}