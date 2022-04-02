import {useEffect, useState} from "react";
import * as service from "../../services/tuits-service";
import Tuits from "../tuits/index";

const MyTuits = () => {
    const [tuits, setTuits] = useState([]);
    const findMyTuits = () => {
        //service.findTuitByUser("me").then(setTuits)
    }

    useEffect(findMyTuits, [setTuits]);
    const deleteTuit = (tid) => service.deleteTuit(tid).then(findMyTuits);

    return (
        <Tuits tuits={tuits}
               deleteTuit={deleteTuit}/>
    );
};

export default MyTuits;