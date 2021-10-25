import React from 'react';
import seasons from '../../utils/seasons';
import FeatureCards from '../../components/FeatureCards';

const OverviewContent = () => {

    const browserwidth = window.innerWidth < 960

    return (
        <section className="about">
            {browserwidth ? (
                <div data-aos="fade-in" className="aboutImgContainer">
                    <div className="about_one">
                        <div className="overview_one_container">
                        <p className="overview_text">Choose Northern Lights Lodge as the unique,
                            impressive setting for your next family gathering, corporate retreat,
                            or intimate wedding.</p>
                            <img className={`greatroom_${seasons()}`}></img>
                        </div>
                    </div>
                    <div className="overview_two">
                            <h2 className="overview_feature_header">Features</h2>
                            <FeatureCards />
                        </div>
                </div>
            ) : (
                    <div data-aos="fade-in" className="aboutImgContainer">
                        <div className="about_one">
                            <img className={`greatroom_${seasons()}`}></img>
                            <div className="overview_text_container">
                                <p className="overview_text">Choose Northern Lights Lodge as the unique,
                                impressive setting for your next family gathering, corporate retreat,
                            or intimate wedding.</p>
                            </div>
                        </div>
                        <div className="overview_two">
                            <h2 className="overview_feature_header">Features</h2>
                            <FeatureCards />
                        </div>
                    </div>
                )}
        </section>
    );
}

export default OverviewContent;