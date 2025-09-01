export type Group = {
    groupId: string,
    groupName: string,
    peopleMaximum: number,
    peopleRsvped: number
};

export type GroupsApiParams = {
    method?: string;
    data?: Group;
    groupId: string;
}