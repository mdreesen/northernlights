import React from 'react';
import Parallax from 'react-rellax';

const Interior = () => {
    return (
        <section>
            <div className="homeImgContainer">
                <h1 className="headerOneText">Come on In</h1>
                <Parallax speed={3}>
                    {/* <img className="topImgBackground"></img> */}
                    <img className="topImgInterior"></img>
                </Parallax>
            </div>

           <p>Featured in Forbes, this home is truly spectacular and loaded with amenities for the ultimate Montana getaway. Built with cedar tree beam supports, chestnut flooring, and custom cabinetry made from reclaimed local barnwood, Northern Lights Lodge boasts incredible vaulted ceilings and architectural features. The home has an elevator for easy access to all four floors, 5 gas fireplaces and a central media system. There is abundant room for hosting in the gourmet kitchen, complete with commercial grade appliances, granite countertops, horseshoe-shaped breakfast bar, and all the amenities needed to create memorable meals together. There are three additional kitchenettes throughout the home that service the lodging areas.
After a long day of skiing or hiking, you can hang up your gear in the locker room and unwind in the sauna or in-ground hot tub. The relaxation continues as you take in a movie in the private theater room, featuring surround sound, red velvet throughout and cozy seating for your whole group. Enjoy the outdoors and panoramic views from the outdoor grilling kitchen, featuring a stone-carved dining area.</p>

            <section>
                <div>One</div>
            </section>
            <section>
                <div>two</div>
            </section>
            <section>
                <div>three</div>
            </section>
            <section>
                <div>four</div>
            </section>
            <section>
                <div>five</div>
            </section>
            <section>
                <div>six</div>
            </section>
            <section>
                <div>seven</div>
            </section>
        </section>
    );
}

export default Interior;