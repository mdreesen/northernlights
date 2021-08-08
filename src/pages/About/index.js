import React from 'react';
import 'aos/dist/aos.css';

const About = () => {

    const browserwidth = window.innerWidth < 960

    return (
        <section className="about">
            {browserwidth ? (
                <div data-aos="fade-in" className="aboutImgContainer">
                    <div className="about_one">
                        <img className="aboutImgOne"></img>
                        <p className="about_text">Experience the pinnacle of Montana luxury at
                        Northern Lights Lodge - a lavish mountain estate with incredible rustic woodwork,
                    one-of-a-kind high-end furnishings, and breathtaking views.</p>
                    </div>
                    <div className="about_two">
                        <img className="aboutImgTwo"></img>
                        <p className="about_text">Located atop Big Mountain in Whitefish and a short drive from Glacier National Park,
                        this incredible four-level home provides the perfect combination of high-end luxury accommodations with quick access
                to an endless array of outdoor activities.</p>
                    </div>
                    <div className="about_three">
                        <img className="aboutImgThree"></img>
                        <p className="about_text">Northern Lights Lodge is a true ‘ski in ski out’ property,
                located beside Chair 3 on Whitefish Mountain Resort; providing access to 3,000 acres of award winning slopes.</p>
                    </div>
                </div>
            ) : (
                    <div data-aos="fade-in" className="aboutImgContainer">
                        <div className="about_one">
                            <img className="aboutImgOne"></img>
                            <div className="about_divider"></div>
                            <p className="about_text">Experience the pinnacle of Montana luxury at
                            Northern Lights Lodge - a lavish mountain estate with incredible rustic woodwork,
                    one-of-a-kind high-end furnishings, and breathtaking views.</p>
                        </div>
                        <div className="about_two">
                            <p className="about_text">Located atop Big Mountain in Whitefish and a short drive from Glacier National Park,
                            this incredible four-level home provides the perfect combination of high-end luxury accommodations with quick access
                to an endless array of outdoor activities.</p>
                            <div className="about_divider"></div>
                            <img className="aboutImgTwo"></img>
                        </div>
                        <div className="about_three">
                            <img className="aboutImgThree"></img>
                            <div className="about_divider"></div>
                            <p className="about_text">Northern Lights Lodge is a true ‘ski in ski out’ property,
                located beside Chair 3 on Whitefish Mountain Resort; providing access to 3,000 acres of award winning slopes.</p>
                        </div>
                    </div>
                )}
        </section>
    );
}

export default About;