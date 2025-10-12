import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

const LoveStoryPt1 = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <Slide className="love-story">
            <img
                src={require('../../images/retta1.jpg')}
                alt="Love story"
                className="two-pane-left love-story-left"
                onLoad={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="two-pane-right love-story-right">
                <div className="pane-header">Our Love Story</div>
            </div>
        </Slide>
    )
};

export default LoveStoryPt1;