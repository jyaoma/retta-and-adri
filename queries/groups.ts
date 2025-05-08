import { pgp, db } from '../dbConnection';
import { Group } from '../types/groups';

const { QueryFile } = pgp;

const getUsersByGroupId = new QueryFile(
    `${__dirname}/sql/getUsersByGroupId.psql`
);
export const queryToGetUsersByGroupId = (groupId: string): Promise<Group> =>
    db.manyOrNone(getUsersByGroupId, { groupId })

const updateRsvpStatusToFalse = new QueryFile(
    `${__dirname}/sql/updateRsvpStatusToFalse.psql`
);
export const queryToUpdateRsvpStatusToFalse = (userIds: number[]): Promise<Group> =>
    db.manyOrNone(updateRsvpStatusToFalse, { userIds })

const updateRsvpStatusToTrue = new QueryFile(
    `${__dirname}/sql/updateRsvpStatusToTrue.psql`
);
export const queryToUpdateRsvpStatusToTrue = (userIds: number[]): Promise<Group> =>
    db.manyOrNone(updateRsvpStatusToTrue, { userIds })
