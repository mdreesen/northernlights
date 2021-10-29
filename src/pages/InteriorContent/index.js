import React from 'react';
import 'aos/dist/aos.css';
import descriptionData from '../../utils/discriptionData.json';

const InteriorContent = () => {

    const browserwidth = window.innerWidth < 960 || window.screen.width < 960

    const Description = () => {
        return (
            descriptionData.indoor.map((item, index) => {
                const assetSwitch = index % 2 === 0 ? 'right_asset' : 'left_asset';
                if (!browserwidth) {
                    return index % 2 === 0 ? (
                        <div key={`interior-${index}`}  className={assetSwitch}>
                            <picture className={item.image}></picture>
                            {!browserwidth ? (
                                <div className="interior_divider"></div>
                            ) : (
                                    <div />
                                )}
                            <p className="about_text">{item.description}</p>
                        </div>
                    ) : (
                            <div key={`interior-${index}`} className={assetSwitch}>
                                <p className="about_text">{item.description}</p>
                                {!browserwidth ? (
                                    <div className="interior_divider"></div>
                                ) : (
                                        <div />
                                    )}
                                <picture className={item.image}></picture>
                            </div>
                        )
                } else {
                    return (
                        <div key={`interior-${index}`} className="interior">
                            <picture className={item.image}></picture>
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

export default InteriorContent;