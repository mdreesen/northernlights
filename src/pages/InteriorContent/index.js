import React from 'react';
import 'aos/dist/aos.css';

const InteriorContent = () => {

    const browserwidth = window.innerWidth < 960

    return (
        <section className="about">
            {browserwidth ? (
                <div data-aos="fade-in" className="aboutImgContainer">
                    <div className="interior_one">
                        <img className="interiorImgOne"></img>
                        <p className="about_text">Featured in Forbes, this home is truly spectacular and loaded with amenities for the ultimate Montana getaway.</p>
                    </div>
                    <div className="interior_two">
                        <img className="interiorImgTwo"></img>
                        <p className="about_text">Built with cedar tree beam supports, chestnut flooring, and custom cabinetry made from reclaimed local barnwood, Northern Lights Lodge boasts incredible vaulted ceilings and architectural features.</p>
                    </div>
                    <div className="interior_three">
                        <img className="interiorImgThree"></img>
                        <p className="about_text">The home has an elevator for easy access to all four floors, 5 gas fireplaces and a central media system.</p>
                    </div>
                    <div className="interior_four">
                        <img className="interiorImgFour"></img>
                        <p className="about_text">There is abundant room for hosting in the gourmet kitchen, complete with commercial grade appliances, granite countertops, horseshoe-shaped breakfast bar, and all the amenities needed to create memorable meals together.
                            There are three additional kitchenettes throughout the home that service the lodging areas.</p>
                    </div>
                    <div className="interior_five">
                        <img className="interiorImgFive"></img>
                        <p className="about_text">After a long day of skiing or hiking, you can hang up your gear in the locker room and unwind in the sauna or in-ground hot tub.</p>
                    </div>
                    <div className="interior_six">
                        <img className="interiorImgSix"></img>
                        <p className="about_text">The relaxation continues as you take in a movie in the private theater room, featuring surround sound, red velvet throughout and cozy seating for your whole group.</p>
                    </div>
                    <div className="interior_seven">
                        <img className="interiorImgSeven"></img>
                        <p className="about_text">Enjoy the outdoors and panoramic views from the outdoor grilling kitchen, featuring a stone-carved dining area.</p>
                    </div>
                </div>
            ) : (
                    <div data-aos="fade-in" className="interiorImgContainer">
                        <div className="interior_one">
                            <img className="interiorImgOne"></img>
                            <div className="interior_divider"></div>
                            <p className="about_text">Featured in Forbes, this home is truly spectacular and loaded with amenities for the ultimate Montana getaway.</p>
                        </div>
                        <div className="interior_two">
                            <p className="about_text">Built with cedar tree beam supports, chestnut flooring, and custom cabinetry made from reclaimed local barnwood, Northern Lights Lodge boasts incredible vaulted ceilings and architectural features.</p>
                            <div className="interior_divider"></div>
                            <img className="interiorImgTwo"></img>
                        </div>
                        <div className="interior_three">
                            <img className="interiorImgThree"></img>
                            <div className="interior_divider"></div>
                            <p className="about_text">The home has an elevator for easy access to all four floors, 5 gas fireplaces and a central media system.</p>
                        </div>
                        <div className="interior_four">
                            <p className="about_text">There is abundant room for hosting in the gourmet kitchen, complete with commercial grade appliances, granite countertops, horseshoe-shaped breakfast bar, and all the amenities needed to create memorable meals together.
                            There are three additional kitchenettes throughout the home that service the lodging areas.</p>
                            <div className="interior_divider"></div>
                            <img className="interiorImgFour"></img>
                        </div>
                        <div className="interior_five">
                            <img className="interiorImgFive"></img>
                            <div className="interior_divider"></div>
                            <p className="about_text">After a long day of skiing or hiking, you can hang up your gear in the locker room and unwind in the sauna or in-ground hot tub.</p>
                        </div>
                        <div className="interior_six">
                            <p className="about_text">The relaxation continues as you take in a movie in the private theater room, featuring surround sound, red velvet throughout and cozy seating for your whole group.</p>
                            <div className="interior_divider"></div>
                            <img className="interiorImgSix"></img>
                        </div>
                        <div className="interior_seven">
                            <img className="interiorImgSeven"></img>
                            <div className="interior_divider"></div>
                            <p className="about_text">Enjoy the outdoors and panoramic views from the outdoor grilling kitchen, featuring a stone-carved dining area.</p>
                        </div>
                    </div>
                )}
        </section>
    );
}

export default InteriorContent;