import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

import './theGroom.css';

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
            <div className="two-pane-right">
                <img
                    src={require('../../images/page3.jpg')}
                    alt="The Groom"
                    className="the-groom-right"
                    onLoad={() => {
                        loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                    }}
                />
            </div>
        </Slide>
    );
};

export default TheGroom;