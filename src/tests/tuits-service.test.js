/**
 * @jest-environment node
 */
import {
    createTuit,
    deleteTuit,
    findTuitById,
    findAllTuits
} from "../services/tuits-service";
import {createUser, deleteUser, deleteUsersByUsername} from "../services/users-service";

describe('can create tuit with REST API', () => {
    // sample tuit to insert
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    }
    let helloWorld = {
        tuit: "hello world",
        postedOn: "2021-12-01T00:00:00.000Z"
    }

    // setup test before running test
    beforeAll(async () => {
        //remove any/all tuitsto make sure we create it in the test
        helloWorld.postedBy = (await createUser(ripley))._id
    })

    // clean up after test runs
    afterAll(async () => {
        //remove any data we created
        await findAllTuits().then(tuits => tuits.map(t => {
            deleteTuit(t._id)
        }))
        await deleteUser(helloWorld.postedBy)
    })

    test('can create tuit with REST API', async () => {
        //insert new tuit in the database
        const newTuit = await createTuit(helloWorld.postedBy, helloWorld);
        //verify inserted tuits properties match parameter user
        expect(newTuit.tuit).toEqual(helloWorld.tuit);
        expect(newTuit.postedOn).toEqual(helloWorld.postedOn);
        expect(newTuit.postedBy).toEqual(helloWorld.postedBy);
    });
});

describe('can delete tuit wtih REST API', () => {
    // sample tuit to delete
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    }
    let byeWorld = {
        tuit: "bye world",
        postedOn: "2021-12-01T00:00:00.000Z",
        postedBy: "1"
    }

    // setup the tests before verification
    beforeAll(async () => {
        // insert the sample tuit we then try to remove
        byeWorld.postedBy = (await createUser(ripley))._id
        byeWorld._id = (await createTuit(byeWorld.postedBy, byeWorld))._id;
    });

    // clean up after test runs
    afterAll(async () => {
        // remove any data we created
        await deleteTuit(byeWorld._id);
        return await deleteUser(byeWorld.postedBy)
    })

    test('can delete users from REST API by username', async () => {
        // delete a tuit by their id. Assumes the tuit already exists
        const status = await deleteTuit(byeWorld._id);

        // verify we deleted at least one user by their username
        expect(status.deletedCount).toBeGreaterThanOrEqual(1);
    });
});

describe('can retrieve a tuit by their primary key with REST API', () => {
    // sample tuit we want to retrieve
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    }
    let queryWord = {
        tuit: "find me",
        postedOn: "2021-12-01T00:00:00.000Z",
        postedBy: "1"
    }

    // setup before running test
    beforeAll(async () => {
        // clean up before the test making sure the tuit doesn't already exist
        queryWord.postedBy = (await createUser(ripley))._id
        queryWord._id = (await createTuit(queryWord.postedBy, queryWord))._id;
    });

    // clean up after ourselves
    afterAll(async () => {
        // remove any data we inserted
        await deleteTuit(queryWord._id)
        await deleteUsersByUsername(ripley.username);
    });

    test('can retrieve user from REST API by primary key', async () => {

        // retrieve the user from the database by its primary key
        const existingTuit = await findTuitById(queryWord._id);

        // verify retrieved user matches parameter user
        expect(existingTuit.tuit).toEqual(queryWord.tuit);
        expect(existingTuit.postedOn).toEqual(queryWord.postedOn);
    });
});

describe('can retrieve all tuits with REST API', () => {
    // sample users we'll insert to then retrieve
    const ripley = {
        username: 'ellenripley',
        password: 'lv426',
        email: 'ellenripley@aliens.com'
    }

    let tuits = ["x", "yy", "zzzz"];

    // setup data before test
    beforeAll(async () => {
        ripley._id = (await createUser(ripley))._id
        await Promise.all(tuits.map((t, i) => {
            return createTuit(ripley._id, {
                tuit: t,
                postedOn: `2021-12-01T00:0${i}:00.000Z`,
                postedBy: ripley._id
            })
        }))
    });

    // clean up after ourselves
    afterAll(async () => {
        await findAllTuits().then(ts => ts.filter(t => t.postedBy == ripley._id)
            .map(t => t._id).forEach(deleteTuit))
        await deleteUsersByUsername(ripley.username);
    });

    test('can retrieve all users from REST API', async () => {
        // retrieve all the users
        const results = await findAllTuits();
        // there should be a minimum number of users
        expect(results.length).toBeGreaterThanOrEqual(tuits.length);

        // let's check each user we inserted
        const tuitsPostedByRipley = results.filter(
            t => t.postedBy == ripley._id);

        // compare the actual users in database with the ones we sent
        tuitsPostedByRipley.forEach(t => {
            const i = tuits.indexOf(t.tuit);
            expect(i).toBeGreaterThanOrEqual(0);
            expect(t.postedOn).toEqual(`2021-12-01T00:0${i}:00.000Z`);
        });
    });
});