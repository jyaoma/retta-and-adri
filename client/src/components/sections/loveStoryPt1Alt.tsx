import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

import './loveStoryPt1.css';

const LoveStoryPt1Alt = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <Slide className="love-story">
            <img
                src={require('../../images/page4Alt.jpg')}
                alt="Love story"
                className="love-story-left"
                onLoad={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="love-story-right">
                <div className="pane-header">Our Love Story</div>
            </div>
        </Slide>
    )
};

export default LoveStoryPt1Alt;