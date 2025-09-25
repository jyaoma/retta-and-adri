import { RequestHandler } from "express";

import {
    queryToGetGroupById,
    queryToUpdateRsvp
} from '../queries/groups'
import { Group, GroupRequestParams } from "../types/groups";

export const getGroupById: RequestHandler<
    GroupRequestParams,
    Group
> = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const group = await queryToGetGroupById(groupId);
        res.status(200).json(group);
    } catch (error) {
        next(error);
    }
}

export const updateRsvp: RequestHandler<
    GroupRequestParams,
    Group,
    Group
> = async (req, res, next) => {
    try {
        const rsvpCutoff = 1767632400000;
        const isAfterCutoff = Date.now() > rsvpCutoff;
        if (isAfterCutoff) {
            res.sendStatus(400);
            return;
        }
        const { groupId } = req.params;
        if (req.body.groupId != groupId) {
            res.sendStatus(400);
            return;
        }
        const updatedGroup = await queryToUpdateRsvp(groupId, req.body.peopleRsvped, req.body.hasSubmitted)
        res.status(200).json(updatedGroup);
    } catch (error) {
        next(error);
    }
}
