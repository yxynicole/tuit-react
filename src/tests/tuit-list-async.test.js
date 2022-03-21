/**
 * @jest-environment node
 */
import React from 'react';
import '@testing-library/jest-dom'

const Tuits = require("../components/tuits").default;
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {createTuit, deleteTuit, findAllTuits} from "../services/tuits-service";
import {createUser, deleteUser} from "../services/users-service";

test('tuit list renders async', async () => {
    let user = await createUser(
        {
            username: 'test_render_tuit_async',
            password: 'lv426',
            email: 'test_render_tuit_async@weyland.com'
        }
    )
    let tuits = await Promise.all(["x", "y", "z"].map(
        (t) => createTuit(user._id, {'tuit': t})
    ))

    let data = await findAllTuits()
    expect(data.length).toBeGreaterThanOrEqual(3)

    tuits.forEach(t => deleteTuit(t._id))
    deleteUser(user._id)
})


