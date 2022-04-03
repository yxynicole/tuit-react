import Tuits from "../tuits";
import * as service from "../../services/like-service";
import {useEffect, useState} from "react";

const MyLikes = () => {
    const [likedTuits, setLikedTuis] = useState([]);
    const findTuitsILike = () => {
        service.findAllTuitsLikedByUser("me")
            .then((tuits) => {
                return setLikedTuis(tuits)
            });
    }
    useEffect(findTuitsILike, []);

    return (
        <div className={"container"}>
            <Tuits tuits={likedTuits}
                   refreshTuits={findTuitsILike}/>
        </div>
    );

}
export default MyLikes;