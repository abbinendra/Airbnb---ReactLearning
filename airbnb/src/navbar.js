import React from "react";
import logo from '../public/imgs/airbnb.png'

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} className="Airbnb logo"/>
        </div>
    )
}