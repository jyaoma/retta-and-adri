import axios from 'axios';
import {Group, GroupsApiParams} from "../types/groups";

const groupsApi = async ({ method = 'get', data, groupId }: GroupsApiParams): Promise<Group> => {
    const { data: resData } = await axios({
        url: `${process.env.REACT_APP_SERVER_URL}/groups/${groupId}`,
        method,
        data
    });

    return resData;
}

export default groupsApi;