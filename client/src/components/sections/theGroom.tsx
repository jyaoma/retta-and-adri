import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

const TheGroom = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <Slide className="the-groom" isTwoPane>
            <div className="two-pane-left the-groom-left">
                <div className="pane-header">The Groom</div>
                <div>Adrianus Kurniawan</div>
                <br/>
                <div>1st Son of:</div>
                <div>Mr. Paulus Sugiharto</div>
                <div>Mrs. Angelina Sahbina</div>
            </div>
            <img
                src={require('../../images/retta6.jpg')}
                alt="The Groom"
                className="two-pane-right the-groom-right"
                onLoad={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
        </Slide>
    );
};

export default TheGroom;