import React from 'react';
import Parallax from 'react-rellax';
import seasons from '../../utils/seasons';

const Hero = () => {

    return (
        <div className="homeImgContainer">
            <h1 className="headerOneText">Northern Lights</h1>
            <Parallax speed={-1}>
                <picture className={`overview_${seasons()}`}></picture>
            </Parallax>
        </div>
    );
};

export default Hero;