import React from 'react';
import Parallax from 'react-rellax'

const Home = () => {
    return (
        <div>
            <div className="homeImgContainer">
            <h1 className="headerOneText">Northern Lights</h1>
                <Parallax speed={3}>
                    <img className="topImg"></img>
                </Parallax>
            </div>
        </div>
    );
}

export default Home;