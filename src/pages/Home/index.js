import React from 'react';
import Parallax from 'react-rellax'

const Home = () => {
    return (
        <section>
            <div className="homeImgContainer">
                <h1 className="headerOneText">Northern Lights</h1>
                <Parallax speed={3}>
                    <div className="topImgBackground">
                        <img className="topImg"></img>
                    </div>
                </Parallax>
            </div>
        </section>
    );
}

export default Home;