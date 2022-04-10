import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create(
    {
        withCredentials: true
    }
);

export const userToggleBookmark = (uid, tid) =>
    api.put(`${BASE_URL}/api/users/${uid}/bookmarks/${tid}`)
        .then(response => response.data);

export const findAllTuitsBookmarkedByUser = (uid) =>
    api.get(`${BASE_URL}/api/users/${uid}/bookmarks`)
        .then(response => response.data);
