import React from 'react';
import Parallax from 'react-rellax';
import seasons from '../../utils/seasons';

const Hero = () => {

    return (
        <div className="homeImgContainer">
            <h1 className="headerOneText">Northern Lights</h1>
            <Parallax speed={-1}>
                <img className={`overview_${seasons()}`}></img>
            </Parallax>
        </div>
    );
};

export default Hero;