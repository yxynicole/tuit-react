import React from "react";

import {useNavigate} from "react-router-dom";
import {useState} from "react";
import * as authService from "../../services/auth-services";
import * as userService from "../../services/users-service";
import {UserList} from "./user-list";
import Signup from "./signup";

const LoginDiv = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const login = () =>
        authService.login(loginUser)
            .then(user => alert("welcome " + user.username))
            .then(() => navigate('/profile/mytuits'))
            .catch(e => alert(e));
    return (
        <div>
            <form>
                <h1>Login</h1>
                <input onChange={(e) =>
                    setLoginUser({
                                     ...loginUser,
                                     username: e.target.value
                                 })} className="mb-2 form-control"/>
                <input onChange={(e) =>
                    setLoginUser({
                                     ...loginUser,
                                     password: e.target.value
                                 })} className="mb-2 form-control"/>
                <button onClick={login} className="btn btn-primary mb-5">
                    Login
                </button>
            </form>
        </div>
    );
};

export const Login = () => {
    const [existingUsers, setExistingUsers] = useState([]);

    const deleteUser = (uid) =>
        userService.deleteUser(uid)
            .then(findAllUsers)
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => {
                setExistingUsers(users)
            })

    //useEffect(findAllUsers, [setExistingUsers]);
    return (
        <div>
            <Signup/>
            <LoginDiv/>
            <UserList users={existingUsers} deleteUser={deleteUser}/>
        </div>
    );
};