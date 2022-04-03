import Tuits from "../tuits";
import * as service from "../../services/like-service";
import {useEffect, useState} from "react";

const MyDislikes = () => {
    const [dislikedTuits, setDislikedTuits] = useState([]);
    const findTuitsIDislike = () => {
        service.findAllTuitsDislikedByUser("me")
            .then((tuits) => {
                return setDislikedTuits(tuits)
            });
    }
    useEffect(findTuitsIDislike, []);

    return (
        <div className={"container"}>
            <Tuits tuits={dislikedTuits}
                   refreshTuits={findTuitsIDislike}/>
        </div>
    );

}
export default MyDislikes;