import React from "react";
import * as service from "../../services/auth-services"
import {useState, useEffect} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import MyTuits from "./my-tuits";
import MyLikes from "./my-likes"
import MyDisikes from "./my-dislikes"

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

            <div className={"container"}>
                <Link  to={"./mytuits"} id={"mytuits"} className="text-decoration-none text-black">
                    <button className={"mt-3 btn btn-lg btn-primary rounded-pill w-100 fw-bold text-white"}>mytuits</button>
                </Link>
                <Link  to={"./mylikes"} id={"mylikes"} className="text-decoration-none text-black">
                    <button className={"mt-3 btn btn-lg btn-primary rounded-pill w-100 fw-bold text-white"}>mylikes</button>
                </Link>
                <Link  to={"./mydislikes"} id={"mydislikes"} className="text-decoration-none text-black">
                    <button className={"mt-3 btn btn-lg btn-primary rounded-pill w-100 fw-bold text-white"}>mydislikes</button>
                </Link>
            </div>
            <br/>


            <Routes>
                <Route path="/mytuits" element={<MyTuits/>}/>
                {/*<Route path="/tuits-and-replies"*/}
                {/*       element={<TuitsAndReplies/>}/>*/}
                {/*<Route path="/media"*/}
                {/*       element={<Media/>}/>*/}
                <Route path="/mylikes" element={<MyLikes/>}/>
                <Route path="/mydislikes" element={<MyDisikes/>}/>
            </Routes>
        </div>
    );
};
export default Profile;