export type Group = {
    groupId: string,
    groupName: string,
    peopleMaximum: number,
    peopleRsvped: number,
    hasSubmitted: boolean
};

export type GroupsApiParams = {
    method?: string;
    data?: Group;
    groupId: string;
}