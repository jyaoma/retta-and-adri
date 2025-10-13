import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

import './theBride.css';

const TheBride = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <Slide className="the-bride" isTwoPane>
            <div className="two-pane-left">
                <img
                    src={require('../../images/page2.jpg')}
                    alt="the bride"
                    className="the-bride-left"
                    onLoad={() => {
                        loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                    }}
                />
            </div>
            <div className="two-pane-right the-bride-right">
                <div className="pane-header">The Bride</div>
                <div>Gabriella Claretta Dwiputri</div>
                <br/>
                <div>2nd Daughter of:</div>
                <div>Mr. Husin Hassan</div>
                <div>Mrs. Suzy Sulaiman</div>
            </div>
        </Slide>
    );
};

export default TheBride;