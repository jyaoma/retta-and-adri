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
        const sorted = group.sort((a, b) => a.userId - b.userId);
        res.status(200).json(sorted);
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
        let convertedTrue: Group = [];
        if (toTrue?.length) {
            convertedTrue = await queryToUpdateRsvpStatusToTrue(toTrue.map(g => g.userId));
        }
        let convertedFalse: Group = [];
        if (toFalse?.length) {
            convertedFalse = await queryToUpdateRsvpStatusToFalse(toFalse.map(g => g.userId));
        }
        const result = [...convertedTrue, ...convertedFalse];
        const sorted = result.sort((a, b) => a.userId - b.userId);
        res.status(200).json(sorted);
    } catch (error) {
        next(error);
    }
}
