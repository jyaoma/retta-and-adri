import React from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import Slide from "../slide";

import './theGroom.css';

const TheGroom = () => (
    <Slide className="the-groom">
        <TheGroomContent />
    </Slide>
)

export const TheGroomContent = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <>
            <div className="the-groom-left">
                <div className="the-groom-left-text">
                    <div className="pane-header">The Groom</div>
                    <div>Adrianus Kurniawan</div>
                    <br/>
                    <div>1st Son of:</div>
                    <div>Mr. Paulus Sugiharto</div>
                    <div>Mrs. Angelina Sahbina</div>`
                </div>
            </div>
            <img
                src={require('../../images/page3.jpg')}
                alt="The Groom"
                className="the-groom-right"
                onLoad={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
            />
        </>
    );
};

export default TheGroom;