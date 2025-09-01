import { pgp, db } from '../dbConnection';
import { Group } from '../types/groups';

const { QueryFile } = pgp;

const getGroupById = new QueryFile(
    `${__dirname}/sql/getGroupById.psql`
);
export const queryToGetGroupById = (groupId: string): Promise<Group> =>
    db.one(getGroupById, { groupId })

const updateRsvp = new QueryFile(
    `${__dirname}/sql/updateRsvp.psql`
);
export const queryToUpdateRsvp = (groupId: string, peopleRsvped: number): Promise<Group> =>
    db.one(updateRsvp, { groupId, peopleRsvped })