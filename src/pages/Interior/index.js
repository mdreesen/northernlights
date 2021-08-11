import React from 'react';
import Parallax from 'react-rellax';

import InteriorContent from '../InteriorContent';

const Interior = () => {
    return (
        <section>
            <div className="homeImgContainer">
                <h1 className="headerOneText">Inside Features</h1>
                <Parallax speed={3}>
                    {/* <img className="topImgBackground"></img> */}
                    <img className="topImgInterior"></img>
                </Parallax>
            </div>
            <InteriorContent />
        </section>
    );
}

export default Interior;