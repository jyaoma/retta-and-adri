import axios from 'axios';

const groupsApi = async ({ method = 'get', data, groupId }) => {
    const { data: resData } = await axios({
        url: `${process.env.REACT_APP_SERVER_URL}/groups/${groupId}`,
        method,
        data
    });

    return resData;
}

export default groupsApi;