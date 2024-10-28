import React from "react";
import star from '../public/imgs/star.png'

export default function Card(props){
    return(
            <div className="card">
                <img src={props.img} className="crdimg"/>
                <div className="sbp">
                <div className=" each cardinfo">
                    <img src={star} className="each star"/>
                    <span className="each">{props.rating.toFixed(1)}</span>
                    <span className="each gray">({props.rno}), </span>
                    <span className=" each gray">{props.location}</span>
                </div>
                <div className="each title"><p>{props.title}</p></div>
                <p><span className="each bold">{props.price}</span> / person</p>
                </div>
            </div>
    )
}