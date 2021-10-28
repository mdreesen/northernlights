import React from 'react';
import 'aos/dist/aos.css';
import descriptionData from '../../utils/discriptionData.json';

const ExteriorContent = () => {

    const browserwidth = window.innerWidth < 960 || window.screen.width < 960

    const Description = () => {
        return (
            descriptionData.exterior.map((item, index) => {
                const assetSwitch = index % 2 === 0 ? 'right_asset' : 'left_asset';
                if (!browserwidth) {
                    return index % 2 === 0 ? (
                        <div key={`exterior-${index}`} className={assetSwitch}>
                            <img className={item.image}></img>
                            {!browserwidth ? (
                                <div className="interior_divider"></div>
                            ) : (
                                    <div />
                                )}
                            <p className="about_text">{item.description}</p>
                        </div>
                    ) : (
                            <div key={`exterior-${index}`} className={assetSwitch}>
                                <p className="about_text">{item.description}</p>
                                {!browserwidth ? (
                                    <div className="interior_divider"></div>
                                ) : (
                                        <div />
                                    )}
                                <img className={item.image}></img>
                            </div>
                        )
                } else {
                    return (
                        <div key={`exterior-${index}`} className="interior">
                            <img className={item.image}></img>
                            <p className="about_text">{item.description}</p>
                        </div>
                    );
                }
            })
        );
    };

    return (
        <section className="about">
            <div data-aos="fade-in" className="aboutImgContainer">
                <Description />
            </div>
        </section>
    );
}

export default ExteriorContent;