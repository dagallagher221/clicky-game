import React from "react";
import "./Card.css";

const Card = props => {
    return(
        <div 
            style = {{backgroundImage: `url(${props.src})`}}
            alt={props.alt}
            className="block"
            onClick={() => props.handleClick(prop.name)}>

            </div>
    )
};

export default Card;