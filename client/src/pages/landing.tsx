import React, {useRef, useState} from 'react';
import './rsvp.css';
import {Button} from "@mui/material";

const LandingPage = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    // music
    // four images
    const loaderItems = 3;
    const [loadedItems, setLoadedItems] = useState<number>(0);
    const [showOverlay, setShowOverlay] = useState<boolean>(true);

    return (
        <div className="site">
            <audio
                ref={audioRef}
                src={require('../music.mp3')}
                onCanPlay={() => setLoadedItems(x => x + 1)}
            />
            <div className="page">
                <div className="slide one-pane welcome">
                    <img
                        className="welcome-image"
                        src={require('../images/retta2.jpg')}
                        alt="Welcome slide background"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="welcome-group">
                        <div className="subtitle">To RSVP, please use the link provided to you.</div>
                    </div>
                    <div className="welcome-content">
                        <div className="title">adrian and claretta</div>
                        <div className="subtitle">17 JANUARY 2026</div>
                    </div>
                </div>
                <div className="slide two-pane love-story">
                    <img
                        src={require('../images/retta1.jpg')}
                        alt="Love story"
                        className="two-pane-left love-story-left"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="two-pane-right love-story-right">
                        <div className="pane-header">our love story</div>
                        <div>My love, my dear, you're the gravy on my mashed potatoes,</div>
                        <div>The extra cheese that overloads my nachos.</div>
                        <div>You're the last pickle in the pickle jar,</div>
                        <div>The french fry that fell in the car.</div>
                        <br/>
                        <div>I love you more than a donut with sprinkles,</div>
                        <div>More than the sound of a soda can as it crinkles.</div>
                        <div>You're the bacon on my breakfast plate,</div>
                        <div>The perfect companion, my ultimate food-mate.</div>
                        <br/>
                        <div>My love for you is as deep as a pizza box,</div>
                        <div>As endless as a bag of potato chips, all flavors and blocks.</div>
                        <div>Some say love is a serious, somber affair,</div>
                        <div>But for me, it's a feast, a food-filled dare.</div>
                    </div>
                </div>
            </div>
            {
                showOverlay ? (
                    <div className="overlay">
                        <div className="overlay-content">
                            <div className="title">adrian and claretta</div>
                            <div className="subtitle">17 JANUARY 2026</div>
                        </div>
                        <div className="loader-and-button">
                            {
                                loadedItems !== loaderItems ? (
                                    <div className="loader">
                                        <div className="loading-bar"
                                             style={{width: `${100 * loadedItems / loaderItems}%`}}></div>
                                    </div>
                                ) : (
                                    <Button
                                        variant="contained"
                                        onClick={async () => {
                                            setShowOverlay(false);
                                            await audioRef.current!.play()
                                        }}
                                    >enter</Button>
                                )
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
};

export default LandingPage;