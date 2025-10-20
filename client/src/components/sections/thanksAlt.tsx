import React from 'react';
import Slide from "../slide";
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";

import './thanksAlt.css';

const ThanksAlt = () => {
    const loaderDispatch = useLoaderDispatchContext();

    return (
        <Slide className="thanks-alt" isTwoPane>
            <div className="two-pane-left">
                <div className="pane-header">Thank You For Being Part Of Our Journey</div>
                <div>We look forward to sharing this special day with you. Your presence will be the greatest
                    gift
                    to us as we begin this new chapter together.
                </div>
                <div className="title">Claretta & Adrianus</div>
            </div>
            <div className="two-pane-right">
                <img
                    src={require('../../images/page11.jpg')}
                    alt="Thanks"
                    className="thanks-bg"
                    onLoad={() => {
                        loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                    }}
                />
            </div>
        </Slide>
    );
};

export default ThanksAlt;