/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom'

const Tuits = require("../components/tuits").default;
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {createTuit, deleteTuit, findAllTuits} from "../services/tuits-service";
import axios from "axios";
import {createUser, deleteUser} from "./services";

jest.spyOn(axios, 'get');

const MOCKED_USERS = [
    "alice", "bob", "charlie"
];

const MOCKED_TUITS = [
    {tuit: "alice's tuit", _id: 1}, {tuit: "bob's tuit", _id: 2}, {tuit: "charlie's tuit", _id: 3}
];

test('tuit list renders static tuit array', () => {
    render(
        <HashRouter>
            <Tuits tuits={MOCKED_TUITS} deleteTuit={(_id) => {
            }}/>
        </HashRouter>);
    MOCKED_TUITS.map(t => t.tuit)
        .map(screen.getByText)
        .forEach(t => expect(t).toBeInTheDocument())
});

test('tuit list renders mocked', async () => {
    axios.get.mockImplementation(
        () => Promise.resolve({ data: MOCKED_TUITS}
        ));
    let data = await findAllTuits()
    render(
        <HashRouter>
            <Tuits tuits={data} deleteTuit={(_id) => {
            }}/>
        </HashRouter>);
    MOCKED_TUITS.map(t => t.tuit).map(screen.getByText).forEach(t => expect(t).toBeInTheDocument())

});
