import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Carousel from "../carousel";
import Slide from "../slide";

const LoveStoryPt2 = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <Slide className="love-story-two">
            <Carousel
                images={[require('../../images/retta7.jpg'), require('../../images/adri1.jpeg')]}
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
                images={[require('../../images/retta8.jpg'), require('../../images/adri2.jpeg')]}
                alt="Love Story"
                className="story-two-pic"
                incrementLoadedItems={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="story-two-caption story-caption">
                <div className="love-story-heading">Two colors, one canvas</div>
                <div className="love-story-text">Our Love revealed its colors through both harmony and
                    contrast.
                </div>
                <div className="love-story-text">We learned to bend without breaking,</div>
                <div className="love-story-text">to listen, to give, and to grow.</div>
                <div className="love-story-text">Every challenge shaped us,</div>
                <div className="love-story-text">every difference deepened our bond —</div>
                <div className="love-story-text">until we became one story told in two voices.</div>
            </div>
        </Slide>
    );
}

export default LoveStoryPt2;