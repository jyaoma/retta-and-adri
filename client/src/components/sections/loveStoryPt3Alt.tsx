import React from 'react';

import Slide from '../slide';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";

import './loveStoryAlt.css';
import ImageScroll from "../image-scroll";
import Carousel from "../carousel";

const LoveStoryPt3Alt = () => {
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
        <Slide className="love-story-three-alt" isTwoPane>
            <div className="two-pane-left">
                <ImageScroll
                    images={loveStory3Images}
                    alt="Love Story"
                    incrementLoadedItems={() => {
                        loaderDispatch!({ type: LoaderContextActions.INCREMENT_LOADED_ITEMS });
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
            </div>
            <div className="two-pane-right">
                <Carousel
                    images={loveStory4Images}
                    alt="Love Story"
                    incrementLoadedItems={() => {
                        loaderDispatch!({ type: LoaderContextActions.INCREMENT_LOADED_ITEMS });
                    }}
                />
                <div className="story-four-caption story-caption">
                    <div className="love-story-heading">Choosing eternity<br/>in simple joys</div>
                    <div className="love-story-text">Here we stand, no longer two, but one.</div>
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
            </div>
        </Slide>
    )
};

export default LoveStoryPt3Alt;