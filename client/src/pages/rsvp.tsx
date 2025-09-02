import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from "react-router";
import groupsApi from '../api/groups';

import './rsvp.css';
import {Group} from "../types/groups";
import {Button, ButtonGroup, TextField} from "@mui/material";

const RsvpPage = () => {
    const { groupId: nullableGroupId } = useParams();
    const [group, setGroup] = useState<Group>({ groupId: '', groupName: '', peopleRsvped: -1, peopleMaximum: 1});
    const [isLoading, setIsLoading] = useState(false);

    const groupId = nullableGroupId ?? '';

    const fetchGroup = useCallback(async () => {
        setIsLoading(true);
        const fetchedGroup = await groupsApi({ groupId });
        setGroup(fetchedGroup);
        setIsLoading(false);
    }, [groupId]);
    
    const updateGroup = useCallback(async (updatedGroup: Group) => {
        setIsLoading(true);
        const savedGroup = await groupsApi({
            groupId,
            data: updatedGroup,
            method: 'PUT'
        });
        setGroup(savedGroup);
        setIsLoading(false);
    }, [groupId]);

    useEffect(() => {
        fetchGroup();
    }, [fetchGroup]);

    return (
        <div className="page">
            <div className="slide one-pane welcome">
                {
                    group.groupName ? (
                        <div className="welcome-group">
                            <div className="subtitle">TO OUR HONORED GUEST{group.peopleMaximum >= 2 ? 'S' : ''}</div>
                            <div className="title">{group.groupName}</div>
                        </div>
                    ) : null
                }
                <div className="welcome-content">
                    <div className="subtitle">WE INVITE YOU TO CELEBRATE</div>
                    <div className="title">adrian and claretta</div>
                    <div className="subtitle">17 JANUARY 2026</div>
                </div>
            </div>
            <div className="slide two-pane love-story">
                <div className="two-pane-left love-story-left"></div>
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
                <div className="two-pane-left rsvp-left"></div>
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
                                                        fontSize: '24pt'
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
                </div>
            </div>
            <div className="slide two-pane gift-info">
                <div className="two-pane-left gift-info-left">
                    <div className="pane-header">gift info</div>
                    <div>Bank Name: BCA</div>
                    <div>Gabriella Claretta Dwiputri</div>
                    <div>5445056747</div>
                    <br/>
                    <div>Bank Name: BCA</div>
                    <div>Adrianus Kurniawan</div>
                    <div>5770849863</div>
                </div>
                <div className="two-pane-right gift-info-right"></div>
            </div>
            <div className="slide one-pane rules">
                <div className="pane-header">wedding rules</div>
                <div>don't be nakie</div>
                <div>don't be drunkie</div>
                <div>be politey</div>
                <div>maybe a bit judgy</div>
            </div>
        </div>
    );
}

export default RsvpPage;