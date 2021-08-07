import React from 'react';
// import { Controller, Scene } from 'react-scrollmagic';

const About = () => {

    // const t1 = new TimelineMax({ onUpdate: updatePercentage });
    // const controller = new ScrollMagic.Controller();

    // t1.from("text", .5, { x: 200, opacity: 0 })

    // const scene = new ScrollMagic.Scene({
    //     triggerElement: ".text",
    //     triggerHook: "onLeave",
    //     duration: "100%"
    // })
    //     .setPin(".text")
    //     .setTween(t1)
    //     .addTo(controller)

    //     function updatePercentage() {
    //         t1.progress() && scene
    //     }

    return (
        <section className="about">
            <div className="aboutImgContainer">
                <div className="text">Here is some text</div>
                <img className="aboutImgOne"></img>
                <img className="aboutImgTwo"></img>
                {/* <Controller>
                    <Scene duration={600} pin>
                        <div>Sticky Example</div>
                    </Scene>
                </Controller> */}
            </div>
        </section>
    );
}

export default About;