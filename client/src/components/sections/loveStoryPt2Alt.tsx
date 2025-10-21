import React from 'react';

import Slide from '../slide';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";

import './loveStoryAlt.css';
import ImageScroll from "../image-scroll";

const LoveStoryPt2Alt = () => {
    const loaderDispatch = useLoaderDispatchContext();

    const loveStory1Images = [
        require('../../images/love-story-1/1.1.jpg'),
        require('../../images/love-story-1/1.2.jpg'),
        require('../../images/love-story-1/1.3.jpg'),
        require('../../images/love-story-1/1.4.jpg'),
        require('../../images/love-story-1/1.5.jpg'),
        require('../../images/love-story-1/1.6.jpg'),
        require('../../images/love-story-1/1.7.jpg'),
    ];

    const loveStory2Images = [
        require('../../images/love-story-2/2.1.jpg'),
        require('../../images/love-story-2/2.2.jpg'),
        require('../../images/love-story-2/2.3.jpg'),
        require('../../images/love-story-2/2.4.jpg'),
        require('../../images/love-story-2/2.5.jpg'),
    ];

    return (
        <Slide className="love-story-two-alt" isTwoPane>
            <div className="two-pane-left">
                <ImageScroll
                    images={loveStory1Images}
                    alt="Love Story"
                    incrementLoadedItems={() => {
                        loaderDispatch!({ type: LoaderContextActions.INCREMENT_LOADED_ITEMS });
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
            </div>
            <div className="two-pane-right">
                <ImageScroll
                    images={loveStory2Images}
                    alt="Love Story"
                    incrementLoadedItems={() => {
                        loaderDispatch!({ type: LoaderContextActions.INCREMENT_LOADED_ITEMS });
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
                    <div className="love-story-text">every difference deepened our bond —</div>
                    <div className="love-story-text">until we became one story told in two voices.</div>
                </div>
            </div>
        </Slide>
    )
};

export default LoveStoryPt2Alt;