import {useState} from "react";
//The signup screen shown below uses the auth-service to interact with signup server middleware.
import * as service from "../../services/auth-services";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();

    const signup = () => {
        return service.signup(newUser)
            .then(() => navigate('/profile/mytuits'))
            .catch(e => alert(e));
    }
    return (
        <div>
            <form>
                <h1>Signup</h1>
                <input className="mb-2 form-control"
                       onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                       placeholder={"username"}
                />
                <input className="mb-2 form-control"
                       onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                       placeholder={"password"}
                       type="password"
                />
                <input className="mb-2 form-control"
                       onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                       placeholder="email"
                       type="email"
                />
                <button onClick={signup} className="btn btn-primary mb-5">Signup</button>
            </form>
        </div>
    );
}
export default Signup;