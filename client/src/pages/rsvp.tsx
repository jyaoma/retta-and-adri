import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useParams} from "react-router";
import groupsApi from '../api/groups';

import './rsvp.css';
import {Group} from "../types/groups";
import {Button, ButtonGroup, IconButton, TextField} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CopyIcon from '@mui/icons-material/ContentCopy'
import Carousel from "../components/carousel";
import Slide from "../components/slide";
import {LoaderContextActions, useLoaderDispatchContext} from "../infra/loaderContext";
import Overlay from "../components/sections/overlay";

const RsvpPage = () => {
    const rsvpCutoff = 1767632400000;
    const isAfterCutoff = Date.now() > rsvpCutoff;
    const {groupId: nullableGroupId} = useParams();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [group, setGroup] = useState<Group>({
        groupId: '',
        groupName: '',
        peopleRsvped: -1,
        peopleMaximum: 1,
        hasSubmitted: false
    });
    const loaderItems = 15;
    const loaderDispatch = useLoaderDispatchContext();
    const [showOverlay, setShowOverlay] = useState<boolean>(true);
    const [isSaveSuccess, setIsSaveSuccess] = useState<boolean>(false);
    const [isSaveError, setIsSaveError] = useState<boolean>(false);

    const groupId = nullableGroupId ?? '';

    const fetchGroup = useCallback(async () => {
        const fetchedGroup = await groupsApi({groupId});
        setGroup(fetchedGroup);
    }, [groupId]);

    const updateGroup = useCallback(async (updatedGroup: Group) => {
        try {
            const savedGroup = await groupsApi({
                groupId,
                data: updatedGroup,
                method: 'PUT'
            });
            setGroup(savedGroup);
            setIsSaveSuccess(true);
            setIsSaveError(false);
        } catch (error) {
            setIsSaveError(true);
            setIsSaveSuccess(false);
        }
    }, [groupId]);

    useEffect(() => {
        fetchGroup();
    }, [fetchGroup]);

    useEffect(() => {
        loaderDispatch!({ type: LoaderContextActions.SET_ITEMS_TO_LOAD, data: loaderItems });
    }, [loaderDispatch]);

    const incrementLoadedItems = () => {
        loaderDispatch!({ type: LoaderContextActions.INCREMENT_LOADED_ITEMS });
    }

    const copyToClipboard = (textToCopy: string) => {
        // Use the 'out of viewport hidden text area' trick
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;

        // Move textarea out of the viewport so it's not visible
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";

        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
    }

    const startMusic = () => {
        audioRef.current!.play();
    };

    return (
        <div className="site">
            <audio
                ref={audioRef}
                src={require('../music.mp3')}
                onCanPlay={incrementLoadedItems}
                loop
            />
            <div className="page">
                <Slide className="welcome">
                    <img
                        className="welcome-image"
                        src={require('../images/retta2.jpg')}
                        alt="Welcome slide background"
                        onLoad={incrementLoadedItems}
                    />
                    {
                        group.groupName ? (
                            <div className="welcome-group">
                                <div className="subtitle">TO OUR HONORED
                                    GUEST{group.peopleMaximum >= 2 ? 'S' : ''}</div>
                                <div className="title">{group.groupName}</div>
                                <div className="names">we apologize for any misspelled names.</div>
                                {
                                    group.hasSubmitted ? (
                                        <div className="subtitle">
                                            <CheckIcon color="primary" fontSize="small"/>
                                            <span>you have already rsvp'd</span>
                                        </div>
                                    ) : null
                                }
                            </div>
                        ) : null
                    }
                    <div className="welcome-content">
                        <div className="subtitle">WE INVITE YOU TO CELEBRATE</div>
                        <div className="title">Claretta & Adrianus</div>
                        <div className="subtitle">17th JANUARY 2026</div>
                    </div>
                </Slide>
                <Slide className="the-bride" isTwoPane>
                    <img
                        src={require('../images/retta5.png')}
                        alt="the bride"
                        className="two-pane-left the-bride-left"
                        onLoad={incrementLoadedItems}
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
                        src={require('../images/retta6.jpg')}
                        alt="the groom"
                        className="two-pane-right the-groom-right"
                        onLoad={incrementLoadedItems}
                    />
                </Slide>
                <Slide className="love-story">
                    <img
                        src={require('../images/retta1.jpg')}
                        alt="Love story"
                        className="two-pane-left love-story-left"
                        onLoad={incrementLoadedItems}
                    />
                    <div className="two-pane-right love-story-right">
                        <div className="pane-header">Our Love Story</div>
                    </div>
                </Slide>
                <Slide className="love-story-two">
                    <Carousel
                        images={[require('../images/retta7.jpg'), require('../images/adri1.jpeg')]}
                        alt="Love Story"
                        className="story-one-pic"
                        incrementLoadedItems={incrementLoadedItems}
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
                        incrementLoadedItems={incrementLoadedItems}
                    />
                    <div className="story-two-caption story-caption">
                        <div className="love-story-heading">Two colors, one canvas</div>
                        <div className="love-story-text">Our Love revealed its colors through both harmony and
                            contrast.
                        </div>
                        <div className="love-story-text">We learned to bend without breaking,</div>
                        <div className="love-story-text">to listen, to give, and to grow.</div>
                        <div className="love-story-text">Every challenge shaped us,</div>
                        <div className="love-story-text">every difference deepened our bond —</div>
                        <div className="love-story-text">until we became one story told in two voices.</div>
                    </div>
                </Slide>
                <Slide className="love-story-two">
                    <Carousel
                        images={[require('../images/retta9.jpg'), require('../images/adri3.jpeg')]}
                        alt="Love Story"
                        className="story-three-pic"
                        incrementLoadedItems={incrementLoadedItems}
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
                        incrementLoadedItems={incrementLoadedItems}
                    />
                    <div className="story-four-caption story-caption">
                        <div className="love-story-heading">Choosing eternity in simple joys</div>
                        <div className="love-story-text">Here we stand, no longer two, but one.</div>
                        <div className="love-story-text">Through shifting seasons, we've built a sanctuary for
                            ourselves
                            —
                        </div>
                        <div className="love-story-text">a place where love is steady, certain, and true.</div>
                        <div className="love-story-text">And as we step into forever,</div>
                        <div className="love-story-text">we carry a promise close to our hearts:</div>
                        <div className="love-story-text">to live for today,</div>
                        <div className="love-story-text">finding joy in the simplest things,</div>
                        <div className="love-story-text">and happiness in every moment shared.</div>
                    </div>
                </Slide>
                <Slide className="location" isTwoPane>
                    <div className="two-pane-left location-left">
                        <div className="pane-header">Celebrate With Us At</div>
                        <div>Chapel of St. Mary Immaculate Catholic Church</div>
                        <div>Jl. Satu Maret No.27 1, RT.2/RW.13,</div>
                        <div>Pegadungan, Kalideres, Jakarta Barat</div>
                    </div>
                    <div className="two-pane-right location-right">
                        <iframe
                            title="Chapel of St. Mary Immaculate Catholic Church"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0197703356594!2d106.7036985801483!3d-6.128041583099425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02bc96b7c8c5%3A0x775f42a2451ffbd1!2sSaint%20Mary%20Immaculate%20Catholic%20Church%2C%20Kalideres!5e0!3m2!1sen!2sus!4v1756669711286!5m2!1sen!2sus"
                            height="100%" width="100%" style={{border: 0}}
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Slide>
                <Slide className="rsvp" isTwoPane>
                    <img
                        src={require('../images/retta3.jpg')}
                        alt="RSVP slide"
                        className="two-pane-left rsvp-left"
                        onLoad={incrementLoadedItems}
                    />
                    <div className="two-pane-right rsvp-right">
                        <div className="pane-header">Your Attendance Is Truly A Gift</div>
                        {
                            (isAfterCutoff && !group.hasSubmitted) ? (
                                <div>Sorry, RSVP is closed.</div>
                            ) : (
                                <div>
                                    {
                                        group.peopleMaximum <= 1 ? (
                                            <>
                                                {
                                                    isAfterCutoff ? (
                                                        <>
                                                            <div>Thank you for RSVPing.</div>
                                                            {
                                                                group.peopleRsvped === 0 ?
                                                                    <div>You will not be attending.</div> :
                                                                    <div>You will be attending.</div>
                                                            }
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div>Will you be attending?</div>
                                                            <div>Please RSVP by Jan 5th 2026.</div>
                                                            <br/>
                                                            <ButtonGroup className="rsvp-controls">
                                                                <Button
                                                                    variant={group.peopleRsvped === 1 ? "contained" : "outlined"}
                                                                    onClick={() => {
                                                                        updateGroup({...group, peopleRsvped: 1})
                                                                    }}
                                                                >
                                                                    Yes
                                                                </Button>
                                                                <Button
                                                                    variant={group.peopleRsvped === 0 ? "contained" : "outlined"}
                                                                    onClick={() => {
                                                                        updateGroup({...group, peopleRsvped: 0})
                                                                    }}
                                                                >
                                                                    No
                                                                </Button>
                                                            </ButtonGroup>
                                                        </>
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    isAfterCutoff ? (
                                                        <>
                                                            <div>Thank you for RSVPing.</div>
                                                            {
                                                                group.peopleRsvped === 0 ?
                                                                    <div>Your group will not be attending.</div> :
                                                                    <div>You have RSVPed
                                                                        for {group.peopleRsvped} people.</div>
                                                            }
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div>How many people in your group will be attending?
                                                            </div>
                                                            <div>(max {group.peopleMaximum})</div>
                                                            <div>Please RSVP by Jan 5th 2026.</div>
                                                            <br/>
                                                            <ButtonGroup className="rsvp-controls">
                                                                <Button
                                                                    disabled={group.peopleRsvped <= 0}
                                                                    variant="contained"
                                                                    onClick={() => {
                                                                        updateGroup({
                                                                            ...group,
                                                                            peopleRsvped: group.peopleRsvped - 1
                                                                        })
                                                                    }}
                                                                >
                                                                    -
                                                                </Button>
                                                                <TextField
                                                                    value={group.peopleRsvped}
                                                                    slotProps={{
                                                                        htmlInput: {
                                                                            style: {
                                                                                textAlign: 'center'
                                                                            }
                                                                        },
                                                                        input: {
                                                                            style: {
                                                                                borderRadius: 0,
                                                                                fontSize: '16pt'
                                                                            }
                                                                        }
                                                                    }}
                                                                />
                                                                <Button
                                                                    disabled={group.peopleRsvped >= group.peopleMaximum}
                                                                    variant="contained"
                                                                    onClick={() => {
                                                                        updateGroup({
                                                                            ...group,
                                                                            peopleRsvped: group.peopleRsvped + 1
                                                                        })
                                                                    }}
                                                                >
                                                                    +
                                                                </Button>
                                                            </ButtonGroup>
                                                        </>
                                                    )
                                                }
                                            </>
                                        )
                                    }
                                </div>
                            )
                        }
                        {
                            isAfterCutoff ? null : (
                                <Button
                                    variant="contained"
                                    className="submit-button"
                                    onClick={() => {
                                        updateGroup({...group, hasSubmitted: true})
                                    }}
                                >
                                    submit
                                </Button>
                            )
                        }
                        {
                            isSaveSuccess ? <div>Thank you for RSVPing!</div> : null
                        }
                        {
                            isSaveError ?
                                <div>Something went wrong with saving. Please try again later.</div> : null
                        }
                    </div>
                </Slide>
                <Slide className="gift-info" isTwoPane>
                    <div className="two-pane-left gift-info-left">
                        <div className="pane-header">Wedding Gift</div>
                        <div>For friends and family who want to share a token of love to the bride and groom, kindly
                            find the account details below:
                        </div>
                        <div>&nbsp;</div>
                        <div>Bank Name: BCA</div>
                        <div>Gabriella Claretta Dwiputri</div>
                        <div>
                            5445056747
                            <IconButton size="small" onClick={() => copyToClipboard('5445056747')}>
                                <CopyIcon/>
                            </IconButton>
                        </div>
                        <div>&nbsp;</div>
                        <div>Bank Name: BCA</div>
                        <div>Adrianus Kurniawan</div>
                        <div>
                            5770849863
                            <IconButton size="small" onClick={() => copyToClipboard('5770849863')}>
                                <CopyIcon/>
                            </IconButton>
                        </div>
                    </div>
                    <img
                        src={require('../images/retta4.jpg')}
                        alt="Gift info"
                        className="two-pane-right gift-info-right"
                        onLoad={incrementLoadedItems}
                    />
                </Slide>
                <Slide className="rules">
                    <div className="pane-header">Wedding Attire</div>
                    <div className="attire">We kindly encourage you NOT to wear BLUE, WHITE OR BLACK.</div>
                    <div className="attire">Be you and be as colorful as you want.</div>
                    <div className="palette">
                        <div className="color color-1"/>
                        <div className="color color-2"/>
                        <div className="color color-3"/>
                        <div className="color color-4"/>
                        <div className="color color-5"/>
                        <div className="color color-6"/>
                        <div className="color color-7"/>
                        <div className="color color-8"/>
                        <div className="color color-9"/>
                        <div className="color color-10"/>
                        <div className="color color-11"/>
                        <div className="color color-12"/>
                        <div className="color color-13"/>
                        <div className="color color-14"/>
                        <div className="color color-15"/>
                        <div className="color color-16"/>
                    </div>
                </Slide>
                <Slide className="thanks">
                    <div className="pane-header">Thank You For Being Part Of Our Journey</div>
                    <div>We look forward to sharing this special day with you. Your presence will be the greatest
                        gift
                        to us as we begin this new chapter together.
                    </div>
                    <div className="title">Claretta & Adrianus</div>
                </Slide>
            </div>
            <Overlay {...{showOverlay, setShowOverlay, startMusic}} />
        </div>
    );
}

export default RsvpPage;