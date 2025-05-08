export type Guest = {
    userId: number,
    guestName: string,
    groupId: string,
    rsvpStatus: boolean
};

export type Group = Guest[];

export type GroupRequestParams = {
    groupId: string
}
