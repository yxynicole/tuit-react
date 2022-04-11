import {useEffect, useState} from "react";
import * as service from "../../services/tuits-service";
import Tuits from "../tuits/index";
import TuitPost from "../tuits/tuit-post"

const MyTuits = () => {
    const [tuits, setTuits] = useState([]);
    const [tuit, setTuit] = useState('');

    const findMyTuits = () => {
        service.findTuitByUser("me").then(setTuits)
    }
    const createTuit = () =>{
        if (tuit.length > 0) {
            return service.createTuit("me", {tuit})
                .then(findMyTuits)
                .catch(e => console.log(e.response))
        }
    }

    useEffect(findMyTuits, [setTuits]);
    const deleteTuit = (tid) => service.deleteTuit(tid).then(findMyTuits);

    return (
        <div className={"container"}>
            <TuitPost createTuit={createTuit} setTuit={setTuit} />
            <br/>
            <Tuits tuits={tuits}
                   deleteTuit={deleteTuit} refreshTuits={findMyTuits}/>
        </div>

    );
};

export default MyTuits;