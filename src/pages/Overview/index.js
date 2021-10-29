import React, { Suspense, lazy } from 'react';

// import About from '../About'
const OverviewContent = lazy(() => import('../OverviewContent'));
const Hero = lazy(() => import('../../components/Hero'));

const Overview = () => {
    return (
        <div>
        <section className="top_section">
        <Suspense fallback={<div/>}>
            <Hero />
        </Suspense>
        </section>
        <Suspense fallback={<div/>}>
            <OverviewContent />
        </Suspense>
    </div>
    );
}

export default Overview;