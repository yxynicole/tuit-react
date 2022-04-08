import Tuits from "../tuits"
import * as service from "../../services/bookmark-service"
import {useEffect, useState} from "react";


const MyBookmarks =() => {
    const [bookmarkedTuits, setBookmarkedTuits] = useState([]);
    const findTuitsIBookmarked = () =>{
        service.findAllTuitsBookmarkedByUser("me")
            .then((tuits) => {
                return setBookmarkedTuits(tuits)
            });
    }

    useEffect(findTuitsIBookmarked,[]);

    return(
      <div className = {"container"}>
          <Tuits tuits={bookmarkedTuits} refreshTuits={findTuitsIBookmarked}/>
      </div>
    );

}
export default MyBookmarks;