/**
 * @jest-environment node
 */

import React from 'react';
import {findAllUsers} from "../services/users-service";
import '@testing-library/jest-dom'


test('user list renders async', async () => {
    const users = await findAllUsers();
    expect(users.length).toBeGreaterThan(0)
})

