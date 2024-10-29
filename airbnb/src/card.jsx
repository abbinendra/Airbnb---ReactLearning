import React from "react";
import star from '../public/imgs/star.png'

export default function Card(props){
    return(
            <div className="card">                
                <img src={props.item.coverImg} className="crdimg"/>
                <div className="sbp">
                <div className=" each cardinfo">
                    <img src={star} className="each star"/>
                    <span className="each">{props.item.stats.rating}</span>
                    <span className="each gray">({props.item.stats.reviewCount}), </span>
                    <span className=" each gray">{props.item.location}</span>
                </div>
                <div className="each title"><p>{props.item.title}</p></div>
                <p><span className="each bold">{props.item.price}</span> $ / person</p>
                </div>
            </div>
    )
}