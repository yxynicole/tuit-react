import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
                             withCredentials: true
                         });

export const userLikeTuit = (uid, tid) =>
    api.post(`${USERS_API}/${uid}/likes/${tid}`)
        .then(response => response.data);

export const userDislikeTuit = (uid, tid) =>
    api.delete(`${USERS_API}/${uid}/likes/${tid}`)
        .then(response => response.data);

export const userToggleLike = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/likes/${tid}`)
        .then(response => response.data);
