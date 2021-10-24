import React from 'react';
import Parallax from 'react-rellax';
const { DateTime } = require("luxon");

const Hero = () => {

    function seasons() {
        const date = DateTime.now().toObject()
        console.log(date.month === 10)
        if (date.month > 4 && date.month < 9) {
            return 'summer';
        }
        if (date.month > 9 || 10 || 11 || 12 && date.month < 4) {
            return 'fall'
        }
    }

    return (
        <div className="homeImgContainer">
            <h1 className="headerOneText">Northern Lights</h1>
            <Parallax speed={1}>
                <img className={`${seasons()}`}></img>
            </Parallax>
        </div>
    );
};

export default Hero;