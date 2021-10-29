import React from 'react';
import Parallax from 'react-rellax';

import InteriorContent from '../InteriorContent';

const Interior = () => {
    return (
        <section className="top_section">
            <div className="homeImgContainer">
                <h1 className="headerOneText">Inside Features</h1>
                <Parallax speed={-1}>
                    <picture className="topImgInterior"></picture>
                </Parallax>
            </div>
            <InteriorContent />
        </section>
    );
}

export default Interior;