import React from "react";
import "./Header.css";

const Header = props => {
    <div id="headerContainer" className="container">
        <div id="title">Click a Champ!</div>
        <div id="directions">Don't Click the Same Champ Twice!</div>
        <div id="scoreDiv">Score: {props.score}</div>
    </div>
};

export default Header;