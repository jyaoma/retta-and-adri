import React, {useCallback, useEffect, useRef, useState} from 'react';
import { useParams } from "react-router";
import groupsApi from '../api/groups';

import './rsvp.css';
import {Group} from "../types/groups";
import {Button, ButtonGroup, IconButton, TextField} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CopyIcon from '@mui/icons-material/ContentCopy'

const RsvpPage = () => {
    const { groupId: nullableGroupId } = useParams();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [group, setGroup] = useState<Group>({ groupId: '', groupName: '', peopleRsvped: -1, peopleMaximum: 1, hasSubmitted: false });
    // music
    // four images
    const loaderItems = 11;
    const [loadedItems, setLoadedItems] = useState<number>(0);
    const [showOverlay, setShowOverlay] = useState<boolean>(true);

    const groupId = nullableGroupId ?? '';

    const fetchGroup = useCallback(async () => {
        const fetchedGroup = await groupsApi({ groupId });
        setGroup(fetchedGroup);
    }, [groupId]);
    
    const updateGroup = useCallback(async (updatedGroup: Group) => {
        const savedGroup = await groupsApi({
            groupId,
            data: updatedGroup,
            method: 'PUT'
        });
        setGroup(savedGroup);
    }, [groupId]);

    useEffect(() => {
        fetchGroup();
    }, [fetchGroup]);

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
                    {
                        group.groupName ? (
                            <div className="welcome-group">
                                <div className="subtitle">TO OUR HONORED GUEST{group.peopleMaximum >= 2 ? 'S' : ''}</div>
                                <div className="title">{group.groupName}</div>
                                {
                                    group.hasSubmitted ? (
                                        <div className="subtitle">
                                            <CheckIcon color="primary" fontSize="small" />
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
                        <div className="subtitle">17 JANUARY 2026</div>
                    </div>
                </div>
                <div className="slide two-pane the-bride">
                    <img
                        src={require('../images/retta5.png')}
                        alt="the bride"
                        className="two-pane-left the-bride-left"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="two-pane-right the-bride-right">
                        <div className="pane-header">the bride</div>
                        <div>Gabriella Clarissa Dwiputri</div>
                        <br/>
                        <div>Second Daughter of:</div>
                        <div>Mr. Husin Hassan</div>
                        <div>Mrs. Suzy Sulaiman</div>
                    </div>
                </div>
                <div className="slide two-pane the-groom">
                    <div className="two-pane-left the-groom-left">
                        <div className="pane-header">the groom</div>
                        <div>Adrianus Kurniawan</div>
                        <br/>
                        <div>First Son of:</div>
                        <div>Mr. Paulus Sugiharto</div>
                        <div>Mrs. Angelina Sahbina</div>
                    </div>
                    <img
                        src={require('../images/retta6.jpg')}
                        alt="the groom"
                        className="two-pane-right the-groom-right"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
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
                <div className="slide love-story-two">
                    <img
                        src={require('../images/retta7.jpg')}
                        alt="Love story"
                        className="story-one-pic"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="story-one-caption">
                        Lorem ipsum crackalackin black amet, sizzle adipiscing ass.
                    </div>
                    <img
                        src={require('../images/retta8.jpg')}
                        alt="Love story"
                        className="story-two-pic"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="story-two-caption">
                        Bizzle we gonne chung velizzle, pimpin' volutpizzle, suscipit brizzle, the bizzle vizzle, arcu.
                    </div>
                    <img
                        src={require('../images/retta9.jpg')}
                        alt="Love story"
                        className="story-three-pic"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="story-three-caption">
                        Pellentesque egizzle tortor. Sed erizzle.
                    </div>
                    <img
                        src={require('../images/retta10.jpg')}
                        alt="Love story"
                        className="story-four-pic"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="story-four-caption">
                        Fusce izzle pizzle dapibizzle turpizzle tempizzle for sure.
                    </div>
                </div>
                <div className="slide two-pane location">
                    <div className="two-pane-left location-left">
                        <div className="pane-header">celebrate with us at...</div>
                        <div>St. Mary Immaculate Catholic Church</div>
                        <div>Jl. Satu Maret No.27 1, RT.2/RW.13,</div>
                        <div>Pegadungan, Kalideres, Jakarta Barat</div>
                    </div>
                    <div className="two-pane-right location-right">
                        <iframe
                            title="St. Mary Immaculate Catholic Church"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.0197703356594!2d106.7036985801483!3d-6.128041583099425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02bc96b7c8c5%3A0x775f42a2451ffbd1!2sSaint%20Mary%20Immaculate%20Catholic%20Church%2C%20Kalideres!5e0!3m2!1sen!2sus!4v1756669711286!5m2!1sen!2sus"
                            height="100%" width="100%" style={{border: 0}}
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="slide two-pane rsvp">
                    <img
                        src={require('../images/retta3.jpg')}
                        alt="RSVP slide"
                        className="two-pane-left rsvp-left"
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                    <div className="two-pane-right rsvp-right">
                        <div className="pane-header">your attendance is truly a gift</div>
                        <div>
                            {
                                group.peopleMaximum <= 1 ? (
                                    <>
                                        <div>Will you be attending?</div>
                                        <br/>
                                        <ButtonGroup className="rsvp-controls">
                                            <Button
                                                variant={group.peopleRsvped === 1 ? "contained" : "outlined"}
                                                onClick={() => {
                                                    updateGroup({ ...group, peopleRsvped: 1 })
                                                }}
                                            >
                                                Yes
                                            </Button>
                                            <Button
                                                variant={group.peopleRsvped === 0 ? "contained" : "outlined"}
                                                onClick={() => {
                                                    updateGroup({ ...group, peopleRsvped: 0 })
                                                }}
                                            >
                                                No
                                            </Button>
                                        </ButtonGroup>
                                    </>
                                ) : (
                                    <>
                                        <div>How many people in your group will be attending?</div>
                                        <div>(max {group.peopleMaximum})</div>
                                        <br/>
                                        <ButtonGroup className="rsvp-controls">
                                            <Button
                                                disabled={group.peopleRsvped <= 0}
                                                variant="contained"
                                                onClick={() => {
                                                    updateGroup({ ...group, peopleRsvped: group.peopleRsvped - 1})
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
                                                    updateGroup({ ...group, peopleRsvped: group.peopleRsvped + 1})
                                                }}
                                            >
                                                +
                                            </Button>
                                        </ButtonGroup>
                                    </>
                                )
                            }
                        </div>
                        <Button
                            variant="contained"
                            className="submit-button"
                            onClick={() => {
                                updateGroup({ ...group, hasSubmitted: true })
                            }}
                        >
                            submit
                        </Button>
                    </div>
                </div>
                <div className="slide two-pane gift-info">
                    <div className="two-pane-left gift-info-left">
                        <div className="pane-header">wedding gift</div>
                        <div>Bank Name: BCA</div>
                        <div>Gabriella Claretta Dwiputri</div>
                        <div>
                            5445056747
                            <IconButton size="small" onClick={() => copyToClipboard('5445056747')}>
                                <CopyIcon/>
                            </IconButton>
                        </div>
                        <br></br>
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
                        onLoad={() => setLoadedItems(x => x + 1)}
                    />
                </div>
                <div className="slide one-pane rules">
                    <div className="pane-header">wedding attire</div>
                    <div className="attire">Please do not wear blue, black, or white and be as colorful as you want.</div>
                    <div className="palette">
                        <div className="color color-1" />
                        <div className="color color-2" />
                        <div className="color color-3" />
                        <div className="color color-4" />
                        <div className="color color-5" />
                        <div className="color color-6" />
                        <div className="color color-7" />
                        <div className="color color-8" />
                        <div className="color color-9" />
                        <div className="color color-10" />
                        <div className="color color-11" />
                        <div className="color color-12" />
                        <div className="color color-13" />
                        <div className="color color-14" />
                        <div className="color color-15" />
                        <div className="color color-16" />
                    </div>
                </div>
                <div className="slide one-pane thanks">
                    <div className="pane-header">thank you for being part of our journey</div>
                    <div>We look forward to sharing this special day with you. Your presence will be the greatest gift to us as we begin this new chapter together.</div>
                    <div className="title">Claretta & Adrianus</div>
                </div>
            </div>
            {
                showOverlay ? (
                    <div className="overlay">
                        <div className="overlay-content">
                            <div className="subtitle">WE INVITE YOU TO CELEBRATE</div>
                            <div className="title">Claretta & Adrianus</div>
                            <div className="subtitle">17 JANUARY 2026</div>
                        </div>
                        <div className="loader-and-button">
                            {
                                loadedItems !== loaderItems ? (
                                    <div className="loader">
                                        <div className="loading-bar" style={{ width: `${100 * loadedItems / loaderItems}%` }}></div>
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
    );
}

export default RsvpPage;