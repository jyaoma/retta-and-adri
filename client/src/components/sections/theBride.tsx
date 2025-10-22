import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

import './theBride.css';

const TheBride = () => (
    <Slide className="the-bride">
        <TheBrideContent />
    </Slide>
);

export const TheBrideContent = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <>
            <img
                src={require('../../images/page2.jpg')}
                alt="the bride"
                className="the-bride-left"
                onLoad={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
            <div className="the-bride-right">
                <div className="the-bride-right-text">
                    <div className="pane-header">The Bride</div>
                    <div>Gabriella Claretta Dwiputri</div>
                    <br/>
                    <div>2nd Daughter of:</div>
                    <div>Mr. Husin Hassan</div>
                    <div>Mrs. Suzy Sulaiman</div>
                </div>
            </div>
        </>
    );
}

export default TheBride;