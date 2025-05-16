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
        <div>
            <div>RSVP</div>
            {group.map(guest => (
                <div key={guest.userId} className="guest" onClick={() => flipUser(guest.userId)}>
                    {guest.guestName}: {guest.rsvpStatus ? 'Yes' : 'No'}
                </div>
            ))}
        </div>
    )
}

export default RsvpPage;