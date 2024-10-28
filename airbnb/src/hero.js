import React from "react";
import gridtxt from '../public/imgs/grid.png'

export default function Hero(){
    return(
        <div className="hero">
            <img src={gridtxt} className="grid"/>
            <h1>Online Experiences</h1>
            <h4>Join unique interactive activities led by one of a kind hosts - all without leaving home.</h4>
        </div>
    )
}