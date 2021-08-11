import React from 'react';
import VideoPlayer from 'react-video-js-player';
import TourVideo from '../../video/northernlights.mp4'

const Tour = () => {
    const VideoSrc = TourVideo

    const browserwidthOne = window.innerWidth > 470 && window.innerWidth < 770
    const browserwidthTwo = window.innerWidth < 470

    if (browserwidthOne) {
        return (
        <div className="tour_content_wrapper">
            <h2>Take a Tour</h2>
            <VideoPlayer src={VideoSrc} width="420" height="320"/>
        </div>
        );
    }
    if (browserwidthTwo) {
        return (
        <div className="tour_content_wrapper">
            <h2>Take a Tour</h2>
            <VideoPlayer src={VideoSrc} width="300px" height="220"/>
        </div>
        );
    } 

    return (
    <div className="tour_content_wrapper">
        <h2>Take a Tour</h2>
        <VideoPlayer src={VideoSrc} width="720" height="420"/>
    </div>
    );
}

export default Tour;