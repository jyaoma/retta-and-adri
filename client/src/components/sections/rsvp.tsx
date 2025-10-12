import React, {useCallback, useState} from 'react';
import {LoaderContextActions, useLoaderDispatchContext} from "../../infra/loaderContext";
import {Button, ButtonGroup, TextField} from "@mui/material";
import Slide from "../slide";
import {Group} from "../../types/groups";
import groupsApi from "../../api/groups";
import PropTypes from "prop-types";

const Rsvp = (props: RsvpProps) => {
    const rsvpCutoff = 1767632400000;
    const isAfterCutoff = Date.now() > rsvpCutoff;

    const [isSaveSuccess, setIsSaveSuccess] = useState<boolean>(false);
    const [isSaveError, setIsSaveError] = useState<boolean>(false);

    const loaderDispatch = useLoaderDispatchContext();

    const {
        groupId,
        group,
        setGroup
    } = props;

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

    return (
        <Slide className="rsvp" isTwoPane>
            <img
                src={require('../../images/retta3.jpg')}
                alt="RSVP slide"
                className="two-pane-left rsvp-left"
                onLoad={() => {
                    loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                }}
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
    )
}

type RsvpProps = {
    groupId: string;
    group: Group;
    setGroup: (group: Group) => void;
}

Rsvp.propTypes = {
    groupId: PropTypes.string,
    group: PropTypes.shape({
        groupId: PropTypes.string,
        groupName: PropTypes.string,
        peopleMaximum: PropTypes.number,
        peopleRsvped: PropTypes.number,
        hasSubmitted: PropTypes.bool,
    }),
    setGroup: PropTypes.func,
}

export default Rsvp;