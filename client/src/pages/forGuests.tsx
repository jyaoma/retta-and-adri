import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useParams} from "react-router";
import groupsApi from '../api/groups';

import './site.css';
import {Group} from "../types/groups";
import CheckIcon from '@mui/icons-material/Check';
import Slide from "../components/slide";
import {LoaderContextActions, useLoaderDispatchContext} from "../infra/loaderContext";
import Overlay from "../components/sections/overlay";
import Thanks from "../components/sections/thanks";
import Rules from "../components/sections/rules";
import GiftInfo from "../components/sections/giftInfo";
import Rsvp from "../components/sections/rsvp";
import Location from "../components/sections/location";
import LoveStoryPt3 from "../components/sections/loveStoryPt3";
import LoveStoryPt2 from "../components/sections/loveStoryPt2";
import LoveStoryPt1 from "../components/sections/loveStoryPt1";
import TheGroom from "../components/sections/theGroom";
import TheBride from "../components/sections/theBride";

const GuestsPage = () => {
    const {groupId: nullableGroupId} = useParams();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [group, setGroup] = useState<Group>({
        groupId: '',
        groupName: '',
        peopleRsvped: -1,
        peopleMaximum: 1,
        hasSubmitted: false
    });
    const loaderDispatch = useLoaderDispatchContext();

    const groupId = nullableGroupId ?? '';

    const fetchGroup = useCallback(async () => {
        const fetchedGroup = await groupsApi({groupId});
        setGroup(fetchedGroup);
    }, [groupId]);

    useEffect(() => {
        fetchGroup();
    }, [fetchGroup]);

    useEffect(() => {
        loaderDispatch!({ type: LoaderContextActions.SET_ITEMS_TO_LOAD, data: 25 });
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
                        src={require('../images/page1.jpg')}
                        alt="Welcome slide background"
                        onLoad={() => {
                            loaderDispatch!({type: LoaderContextActions.INCREMENT_LOADED_ITEMS});
                        }}
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
                <TheBride />
                <TheGroom />
                <LoveStoryPt1 />
                <LoveStoryPt2 />
                <LoveStoryPt3 />
                <Location />
                <Rsvp {...{groupId, group, setGroup}} />
                <GiftInfo />
                <Rules />
                <Thanks />
            </div>
            <Overlay {...{startMusic}} />
        </div>
    );
}

export default GuestsPage;