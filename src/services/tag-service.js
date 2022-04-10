import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create(
    {
        withCredentials: true
    }
);

export const findAllTagsByUser = (uid) =>
    api.get(`${BASE_URL}/api/users/${uid}/tags`)
        .then(response => response.data);

export const findAllTagsByTuit = (uid, tid) =>
    api.get(`${BASE_URL}/api/users/${uid}/bookmarks/${tid}/tags`)
        .then(response => response.data);

export const createTag = (uid, tid, tagName) =>
    api.post(`${BASE_URL}/api/users/${uid}/bookmarks/${tid}/tags`, {tagName})
        .then(response => response.data);

export const deleteTag = (uid, tid, tagName) =>
    api.delete(`${BASE_URL}/api/users/${uid}/bookmarks/${tid}/tags`, {data:{tagName}})
        .then(response => response.data);

