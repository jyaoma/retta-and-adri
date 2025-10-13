import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Carousel from "../carousel";
import Slide from "../slide";

import './loveStoryPt2+3.css';

const LoveStoryPt3 = () => {
    const loaderDispatch = useLoaderDispatchContext();

    const loveStory3Images = [
        require('../../images/love-story-3/3.5.jpg'),
        require('../../images/love-story-3/3.4.jpg'),
        require('../../images/love-story-3/3.3.jpg'),
        require('../../images/love-story-3/3.2.jpg'),
        require('../../images/love-story-3/3.1.jpg'),
    ];

    const loveStory4Images = [
        require('../../images/love-story-4/4.1.jpg'),
    ];

    return (
        <Slide className="love-story-three">
            <Carousel
                images={loveStory3Images}
                alt="Love Story"
                className="story-three-pic"
                incrementLoadedItems={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="story-three-caption story-caption">
                <div className="love-story-heading">Faster than time, brighter than stars</div>
                <div className="love-story-text">Like a shooting star,</div>
                <div className="love-story-text">our love surged forward with unstoppable light.</div>
                <div className="love-story-text">The world blurred around us,</div>
                <div className="love-story-text">but within us, clarity remained:</div>
                <div className="love-story-text">each trial, a flame that tempered us,</div>
                <div className="love-story-text">each joy, a spark that made us shine brighter.</div>
            </div>
            <Carousel
                images={loveStory4Images}
                alt="Love Story"
                className="story-four-pic"
                incrementLoadedItems={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="story-four-caption story-caption">
                <div className="love-story-heading">Choosing eternity in simple joys</div>
                <div className="love-story-text">Herem we stand, no longer two, but one.</div>
                <div className="love-story-text">Through shifting seasons, we've built a sanctuary for
                    ourselves
                    —
                </div>
                <div className="love-story-text">a place where love is steady, certain, and true.</div>
                <div className="love-story-text">And as we step into forever,</div>
                <div className="love-story-text">we carry a promise close to our hearts:</div>
                <div className="love-story-text">to live for today,</div>
                <div className="love-story-text">finding joy in the simplest things,</div>
                <div className="love-story-text">and happiness in every moment shared.</div>
            </div>
        </Slide>
    );
};

export default LoveStoryPt3;