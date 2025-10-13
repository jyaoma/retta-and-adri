import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Carousel from "../carousel";
import Slide from "../slide";

import './loveStoryPt2+3.css';

const LoveStoryPt2 = () => {
    const loaderDispatch = useLoaderDispatchContext();

    const loveStory1Images = [
        require('../../images/love-story-1/1.7.jpg'),
        require('../../images/love-story-1/1.6.jpg'),
        require('../../images/love-story-1/1.5.jpg'),
        require('../../images/love-story-1/1.4.jpg'),
        require('../../images/love-story-1/1.3.jpg'),
        require('../../images/love-story-1/1.2.jpg'),
        require('../../images/love-story-1/1.1.jpg'),
    ];

    console.log(loveStory1Images);

    const loveStory2Images = [
        require('../../images/love-story-2/2.5.jpg'),
        require('../../images/love-story-2/2.4.jpg'),
        require('../../images/love-story-2/2.3.jpg'),
        require('../../images/love-story-2/2.2.jpg'),
        require('../../images/love-story-2/2.1.jpg'),
    ]

    return (
        <Slide className="love-story-two">
            <Carousel
                images={loveStory1Images}
                alt="Love Story"
                className="story-one-pic"
                incrementLoadedItems={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="story-one-caption story-caption">
                <div className="love-story-heading">Where destiny first whispered</div>
                <div className="love-story-text">Our journey began where dreams and passions touched.</div>
                <div className="love-story-text">In flavors shared and adventures whispered,</div>
                <div className="love-story-text">we felt the universe gently guiding our steps —</div>
                <div className="love-story-text">two wandering souls drawn together</div>
                <div className="love-story-text">by something greater than chance.</div>
            </div>
            <Carousel
                images={loveStory2Images}
                alt="Love Story"
                className="story-two-pic"
                incrementLoadedItems={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="story-two-caption story-caption">
                <div className="love-story-heading">Two colors, one canvas</div>
                <div className="love-story-text">Our love revealed its colors through both harmony and
                    contrast.
                </div>
                <div className="love-story-text">We learned to bend without breaking,</div>
                <div className="love-story-text">to listen, to give, and to grow.</div>
                <div className="love-story-text">Every challenge shaped us,</div>
                <div className="love-story-mmtext">every difference deepened our bond —</div>
                <div className="love-story-text">until we became one story told in two voices.</div>
            </div>
        </Slide>
    );
}

export default LoveStoryPt2;