import React, { Suspense, lazy } from 'react';
import Parallax from 'react-rellax'

// import About from '../About'
const ExteriorContent = lazy(() => import('../ExteriorContent'))

const Exterior = () => {
    return (
        <div>
            <section className="top_section">
                <div className="homeImgContainer">
                    <h1 className="headerOneText">Outside Features</h1>
                    <Parallax speed={-1}>
                        <picture className="topImg"></picture>
                    </Parallax>
                </div>
            </section>
            <Suspense fallback={<div />}>
                <section>
                    <div className="content_section">
                        <ExteriorContent />
                    </div>
                </section>
            </Suspense>
        </div>
    );
}

export default Exterior;