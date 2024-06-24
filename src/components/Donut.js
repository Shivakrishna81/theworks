import React from 'react';
import './Donut.css';

const Donut = ({ text, isFirstPerson }) => {
    return (
        <div className={`donut-container`}>
            <div className="donut">
                <div className="donut-hole"></div>
                <span className="donut-text">{text}</span>
            </div>
        </div>
    );
};

export default Donut;
