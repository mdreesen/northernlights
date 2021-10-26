import React from 'react';
import 'aos/dist/aos.css';
import descriptionData from '../../utils/discriptionData.json';

const InteriorContent = () => {

    console.log(descriptionData.indoor)

    const browserwidth = window.innerWidth < 960

    const Description = () => {
        return (
            descriptionData.indoor.map((item, index) => {
                const assetSwitch = index % 2 === 0 ? 'right_asset' : 'left_asset';
                return index % 2 === 0 && !browserwidth ? (
                    <div className={assetSwitch}>
                        <img className={item.image}></img>
                        {!browserwidth ? (
                            <div className="interior_divider"></div>
                        ) : (
                                <div />
                            )}
                        <p className="about_text">{item.description}</p>
                    </div>
                ) : (
                        <div className="interior">
                            <img className={item.image}></img>
                            {!browserwidth ? (
                                <div className="interior_divider"></div>
                            ) : (
                                    <div />
                                )}
                            <p className="about_text">{item.description}</p>
                        </div>
                    )
            })
        );
    }

    return (
        <section className="about">
            {browserwidth ? (
                <div data-aos="fade-in" className="aboutImgContainer">
                    <Description />
                </div>
            ) : (
                    <div data-aos="fade-in" className="interiorImgContainer">
                        <Description />
                    </div>
                )}
        </section>
    );
}

export default InteriorContent;