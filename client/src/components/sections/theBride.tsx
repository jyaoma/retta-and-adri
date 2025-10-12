import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

const TheBride = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <Slide className="the-bride" isTwoPane>
            <img
                src={require('../../images/retta5.png')}
                alt="the bride"
                className="two-pane-left the-bride-left"
                onLoad={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
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