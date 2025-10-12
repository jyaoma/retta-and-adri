import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Carousel from "../carousel";
import Slide from "../slide";

const LoveStoryPt3 = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <Slide className="love-story-two">
            <Carousel
                images={[require('../../images/retta9.jpg'), require('../../images/adri3.jpeg')]}
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
                images={[require('../../images/retta10.jpg'), require('../../images/adri4.jpeg')]}
                alt="Love Story"
                className="story-four-pic"
                incrementLoadedItems={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="story-four-caption story-caption">
                <div className="love-story-heading">Choosing eternity in simple joys</div>
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
        </Slide>
    );
};

export default LoveStoryPt3;