import React from 'react'
import "./style/count.css"
import CusImg from "../../assets/images/attendee.png";

const count = (props) => {

    return (
        <div>
            <div className ="squire">
                <h1 className = "h1_c">Customers</h1>
                <label className = "labele_c">{props.customer}</label>
                <img className="atendeeImg" src={CusImg} alt="img" />
                
            </div>
            </div>
    )
}

export default count
