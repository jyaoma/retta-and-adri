export type Group = {
    groupId: string,
    groupName: string,
    peopleMaximum: number,
    peopleRsvped: number,
    hasSubmitted: boolean
};

export type GroupRequestParams = {
    groupId: string
};
