import React, { Suspense, lazy } from 'react';
import Parallax from 'react-rellax';

// import About from '../About'
const OverviewContent = lazy(() => import('../OverviewContent'))

const Overview = () => {
    return (
        <div>
        <section>
            <div className="homeImgContainer">
                <h1 className="headerOneText">Northern Lights</h1>
                <Parallax speed={1}>
                    {/* <img className="topImgBackground"></img> */}
                    <img className="topImgOverview"></img>
                </Parallax>
            </div>
        </section>
        <Suspense fallback={<div/>}>
            <OverviewContent />
        </Suspense>
    </div>
    );
}

export default Overview;