import axios from 'axios';
import { getEmailAddress } from "./Auth";

export const setAuthorName = () => {
    const emailAddress = getEmailAddress();
    return axios.get('http://localhost:4000/user', {
        params: {
            email: emailAddress
        }
    })
}