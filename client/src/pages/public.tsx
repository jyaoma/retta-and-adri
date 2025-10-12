import React, {useEffect, useRef} from 'react';
import './site.css';
import Carousel from "../components/carousel";
import {LoaderContextActions, useLoaderDispatchContext} from "../infra/loaderContext";
import Overlay from "../components/sections/overlay";
import Slide from "../components/slide";
import Thanks from "../components/sections/thanks";
import LoveStoryPt3 from "../components/sections/loveStoryPt3";
import LoveStoryPt2 from "../components/sections/loveStoryPt2";
import LoveStoryPt1 from "../components/sections/loveStoryPt1";
import TheGroom from "../components/sections/theGroom";
import TheBride from "../components/sections/theBride";

const PublicPage = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const loaderDispatch = useLoaderDispatchContext();

    useEffect(() => {
        loaderDispatch!({type: 'SET_ITEMS_TO_LOAD', data: 13});
    }, [loaderDispatch]);

    const startMusic = () => {
        audioRef.current!.play();
    };

    return (
        <div className="site">
            <audio
                ref={audioRef}
                src={require('../music.mp3')}
                onCanPlay={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
                loop
            />
            <div className="page">
                <Slide className="welcome">
                    <img
                        className="welcome-image"
                        src={require('../images/retta2.jpg')}
                        alt="Welcome slide background"
                        onLoad={() => {
                            loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                        }}
                    />
                    <div className="welcome-group">
                        <div className="subtitle">To RSVP, please use the link provided to you.</div>
                    </div>
                    <div className="welcome-content">
                        <div className="title">Claretta & Adrianus</div>
                        <div className="subtitle">17th JANUARY 2026</div>
                    </div>
                </Slide>
                <TheBride />
                <TheGroom />
                <LoveStoryPt1 />
                <LoveStoryPt2 />
                <LoveStoryPt3 />
                <Thanks />
            </div>
            <Overlay {...{startMusic}} />
        </div>
    )
};

export default PublicPage;