import React, { Suspense, lazy } from 'react';
import Parallax from 'react-rellax'

// import About from '../About'
const About = lazy(() => import('../About'))

const Exterior = () => {
    return (
        <div>
            <section>
                <div className="homeImgContainer">
                    <h1 className="headerOneText">Outside Features</h1>
                    <Parallax speed={3}>
                        {/* <img className="topImgBackground"></img> */}
                        <img className="topImg"></img>
                    </Parallax>
                </div>
            </section>
            <Suspense fallback={<div/>}>
                <About />
            </Suspense>
        </div>
    );
}

export default Exterior;