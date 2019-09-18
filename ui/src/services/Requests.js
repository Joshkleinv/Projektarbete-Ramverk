import axios from 'axios';
import { getToken } from "./Auth";

export const setAuthorName = () => {
    const token = getToken();
    return axios.get('http://localhost:4000/user', {
        headers: {
            authorization: token
        }
    })
};
