import { useCallback, useEffect, useState } from 'react';
import { useParams } from "react-router";
import groupsApi from '../api/groups';

import './rsvp.css';

const RsvpPage = () => {
    const { groupId } = useParams();
    const [group, setGroup] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchGroup = useCallback(async () => {
        setIsLoading(true);
        const fetchedGroup = await groupsApi({ groupId });
        setGroup(fetchedGroup);
        setIsLoading(false);
    });
    
    const updateGroup = useCallback(async updatedGroup => {
        setIsLoading(true);
        const savedGroup = await groupsApi({
            groupId,
            data: updatedGroup,
            method: 'PUT'
        });
        setGroup(savedGroup);
        setIsLoading(false);
    });

    useEffect(() => {
        fetchGroup();
    }, []);

    const flipUser = (userId) => {
        const newGroup = group.slice();
        newGroup.forEach((guest, i) => {
            if (guest.userId === userId) {
                newGroup[i].rsvpStatus = !group[i].rsvpStatus;
            }
        });
        updateGroup(newGroup);
    }

    return (
        <div className="page">
            <div className="slide one-pane welcome">
                <div className="title">Welcome to</div>
                <div className="title">Adrian and Claretta's wedding</div>
            </div>
            <div className="slide two-pane love-story">
                <div className="two-pane-left love-story-left"></div>
                <div className="two-pane-right love-story-right">
                    <div className="pane-header">Our Love Story</div>
                    <div>I love you as much as I love my food.</div>
                </div>
            </div>
            <div className="slide two-pane location">
                <div className="two-pane-left location-left">
                    <div className="pane-header">Celebrate with us at...</div>
                </div>
                <div className="two-pane-right location-right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6309056.59543504!2d-85.8594305!3d39.45590665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f2!3m3!1m2!1s0x885bfffa614b06c1%3A0x9922f9f915f9488b!2sDowntown%20Flavortown!5e0!3m2!1sen!2sus!4v1753649231282!5m2!1sen!2sus"
                        height="100%" width="100%" style={{ border: 0 }} allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="slide two-pane rsvp">
                <div className="two-pane-left rsvp-left">
                    <div className="pane-header">Your attendance is truly a gift</div>
                    {group.map(guest => (
                        <div key={guest.userId} className="guest" onClick={() => flipUser(guest.userId)}>
                            {guest.guestName}: {guest.rsvpStatus ? 'Yes' : 'No'}
                        </div>
                    ))}
                </div>
                <div className="two-pane-right rsvp-right"></div>
            </div>
            <div className="slide two-pane gift-info">
                <div className="two-pane-left gift-info-left"></div>
                <div className="two-pane-right gift-info-right">
                    <div className="pane-header">Gift Info</div>
                    <div>Bank Name: BCA</div>
                    <div>Gabriella Claretta Dwiputri</div>
                    <div>5445056747</div>

                    <div>Bank Name: BCA</div>
                    <div>Adrianus Kurniawan</div>
                    <div>5770849863</div>
                </div>
            </div>
            <div className="slide one-pane rules">
                <div>Wedding rules</div>
            </div>
        </div>
    );
}

export default RsvpPage;