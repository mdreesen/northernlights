import React, { Suspense, lazy } from 'react';
import Parallax from 'react-rellax'

// import About from '../About'
const ExteriorContent = lazy(() => import('../ExteriorContent'))

const Exterior = () => {
    return (
        <div>
            <section>
                <div className="homeImgContainer">
                    <h1 className="headerOneText">Outside Features</h1>
                    <Parallax speed={1}>
                        <img className="topImg"></img>
                    </Parallax>
                </div>
            </section>
            <Suspense fallback={<div/>}>
                <ExteriorContent />
            </Suspense>
        </div>
    );
}

export default Exterior;