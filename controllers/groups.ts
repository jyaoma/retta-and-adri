import { RequestHandler } from "express";

import {
    queryToGetUsersByGroupId,
    queryToUpdateRsvpStatusToFalse,
    queryToUpdateRsvpStatusToTrue
} from '../queries/groups'
import { Group, GroupRequestParams } from "../types/groups";

export const getUsersByGroupId: RequestHandler<
    GroupRequestParams,
    Group
> = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const group = await queryToGetUsersByGroupId(groupId);
        res.status(200).json(group);
    } catch (error) {
        next(error);
    }
}

export const updateRsvpStatus: RequestHandler<
    GroupRequestParams,
    Group,
    Group
> = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        if (req.body.find(g => g.groupId != groupId)) {
            res.sendStatus(400);
            return;
        }
        const toTrue = req.body.filter(g => g.rsvpStatus);
        const toFalse = req.body.filter(g => !g.rsvpStatus);
        const convertedTrue = await queryToUpdateRsvpStatusToTrue(toTrue.map(g => g.userId));
        const convertedFalse = await queryToUpdateRsvpStatusToTrue(toFalse.map(g => g.userId));
        res.status(200).json([...convertedTrue, ...convertedFalse]);
    } catch (error) {
        next(error);
    }
}
