import React from "react";
import * as service from "../../services/auth-services"
import {useState, useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import MyTuits from "./my-tuits";

const Profile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    useEffect(() => {
        let f = async () => {
            try {
                const user = await service.profile();
                setProfile(user);
            } catch (e) {
                navigate('/login');
            }
        }
        f()
    }, [navigate]);
    const logout = () => {
        service.logout()
            .then(() => navigate('/login'));
    }
    return (
        <div>
            <h4>{profile.username}</h4>
            <h6>@{profile.username}</h6>
            <button onClick={logout} className={"btn btn-primary mb-5"}>
                Logout
            </button>

            <Routes>
                <Route path="/mytuits" element={<MyTuits/>}/>
                {/*<Route path="/tuits-and-replies"*/}
                {/*       element={<TuitsAndReplies/>}/>*/}
                {/*<Route path="/media"*/}
                {/*       element={<Media/>}/>*/}
                {/*<Route path="/mylikes"*/}
                {/*       element={<MyLikes/>}/>*/}
            </Routes>
        </div>
    );
};
export default Profile;