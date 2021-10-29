import React, { Suspense, lazy } from 'react';
import Parallax from 'react-rellax';

const InteriorContent = lazy(() => import('../InteriorContent'))

const Interior = () => {
    return (
        <div>
            <section className="top_section">
                <div className="homeImgContainer">
                    <h1 className="headerOneText">Inside Features</h1>
                    <Parallax speed={-1}>
                        <picture className="topImgInterior"></picture>
                    </Parallax>
                </div>
            </section>
            <Suspense fallback={<div />}>
                <section>
                    <div className="content_section">
                        <InteriorContent />
                    </div>
                </section>
            </Suspense>
        </div>
    );
}

export default Interior;