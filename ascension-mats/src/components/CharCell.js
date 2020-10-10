import React from 'react';
import './styles/CharCell.css';

const CharCell = (props) => {
    return ( 
    <button className="char-cell">
        <img src={require("../assets/Amber.png")}>

        </img>
    </button>
    );
};

export default CharCell;