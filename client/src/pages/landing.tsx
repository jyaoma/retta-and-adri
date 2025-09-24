import React, {useRef, useState} from 'react';
import './rsvp.css';
import {Button} from "@mui/material";
import Carousel from "../components/carousel";

const LandingPage = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    // music
    // four images
    const loaderItems = 13;
    const [loadedItems, setLoadedItems] = useState<number>(0);
    const [showOverlay, setShowOverlay] = useState<boolean>(true);

    return (
        <div className="site">
            <audio
                ref={audioRef}
                src={require('../music.mp3')}
                onCanPlay={() => setLoadedItems(x => x + 1)}
                loop
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
                        <div className="title">Claretta & Adrianus</div>
                        <div className="subtitle">17th JANUARY 2026</div>
                    </div>
                </div>
                <div className="slide two-pane the-bride">
                    <img
                        src={require('../images/retta5.png')}
                        alt="The Bride"
                        className="two-pane-left the-bride-left"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="two-pane-right the-bride-right">
                        <div className="pane-header">The Bride</div>
                        <div>Gabriella Clarissa Dwiputri</div>
                        <br/>
                        <div>2nd Daughter of:</div>
                        <div>Mr. Husin Hassan</div>
                        <div>Mrs. Suzy Sulaiman</div>
                    </div>
                </div>
                <div className="slide two-pane the-groom">
                    <div className="two-pane-left the-groom-left">
                        <div className="pane-header">The Groom</div>
                        <div>Adrianus Kurniawan</div>
                        <br/>
                        <div>1st Son of:</div>
                        <div>Mr. Paulus Sugiharto</div>
                        <div>Mrs. Angelina Sahbina</div>
                    </div>
                    <img
                        src={require('../images/retta6.jpg')}
                        alt="The Groom"
                        className="two-pane-right the-groom-right"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
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
                    <div className="pane-header">Our Love Story</div>
                </div>
            </div>
            <div className="slide love-story-two">
                <Carousel
                    images={[require('../images/retta7.jpg'), require('../images/adri1.jpeg')]}
                    alt="Love Story"
                    className="story-one-pic"
                    setLoadedItems={setLoadedItems}
                />
                <div className="story-one-caption story-caption">
                    <div className="love-story-heading">Where destiny first whispered</div>
                    <div className="love-story-text">Our journey began where dreams and passions touched.</div>
                    <div className="love-story-text">In flavors shared and adventures whispered,</div>
                    <div className="love-story-text">we felt the universe gently guiding our steps —</div>
                    <div className="love-story-text">two wandering souls drawn together</div>
                    <div className="love-story-text">by something greater than chance.</div>
                </div>
                <Carousel
                    images={[require('../images/retta8.jpg'), require('../images/adri2.jpeg')]}
                    alt="Love Story"
                    className="story-two-pic"
                    setLoadedItems={setLoadedItems}
                />
                <div className="story-two-caption story-caption">
                    <div className="love-story-heading">Two colors, one canvas</div>
                    <div className="love-story-text">Our Love revealed its colors through both harmony and contrast.</div>
                    <div className="love-story-text">We learned to bend without breaking,</div>
                    <div className="love-story-text">to listen, to give, and to grow.</div>
                    <div className="love-story-text">Every challenge shaped us,</div>
                    <div className="love-story-text">every difference deepened our bond —</div>
                    <div className="love-story-text">until we became one story told in two voices.</div>
                </div>
            </div>
            <div className="slide love-story-two">
                <Carousel
                    images={[require('../images/retta9.jpg'), require('../images/adri3.jpeg')]}
                    alt="Love Story"
                    className="story-three-pic"
                    setLoadedItems={setLoadedItems}
                />
                <div className="story-three-caption story-caption">
                    <div className="love-story-heading">Faster than time, brighter than stars</div>
                    <div className="love-story-text">Like a shooting star,</div>
                    <div className="love-story-text">our love surged forward with unstoppable light.</div>
                    <div className="love-story-text">The world blurred around us,</div>
                    <div className="love-story-text">but within us, clarity remained:</div>
                    <div className="love-story-text">each trial, a flame that tempered us,</div>
                    <div className="love-story-text">each joy, a spark that made us shine brighter.</div>
                </div>
                <Carousel
                    images={[require('../images/retta10.jpg'), require('../images/adri4.jpeg')]}
                    alt="Love Story"
                    className="story-four-pic"
                    setLoadedItems={setLoadedItems}
                />
                <div className="story-four-caption story-caption">
                    <div className="love-story-heading">Choosing eternity in simple joys</div>
                    <div className="love-story-text">Here we stand, no longer two, but one.</div>
                    <div className="love-story-text">Through shifting seasons, we've built a sanctuary for ourselves —</div>
                    <div className="love-story-text">a place where love is steady, certain, and true.</div>
                    <div className="love-story-text">And as we step into forever,</div>
                    <div className="love-story-text">we carry a promise close to our hearts:</div>
                    <div className="love-story-text">to live for today,</div>
                    <div className="love-story-text">finding joy in the simplest things,</div>
                    <div className="love-story-text">and happiness in every moment shared.</div>
                </div>
            </div>
            <div className="slide one-pane thanks">
                <div className="pane-header">Thank You For Being Part Of Our Journey</div>
                <div>We look forward to sharing this special day with you. Your presence will be the greatest gift to us as we begin this new chapter together.</div>
                <div className="title">Claretta & Adrianus</div>
            </div>
            {
                showOverlay ? (
                    <div className="overlay">
                        <div className="overlay-content">
                            <div className="title">Claretta & Adrianus</div>
                            <div className="subtitle">17th JANUARY 2026</div>
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