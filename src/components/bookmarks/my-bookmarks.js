import Tuits from "../tuits"
import * as service from "../../services/bookmark-service"
import {useEffect, useState} from "react";


const MyBookmarks =({bookmarkedTuits, refreshTuits}) => {
    useEffect(refreshTuits,[]);
    return(
      <div className = {"container"}>
          <Tuits tuits={bookmarkedTuits} refreshTuits={refreshTuits}/>
      </div>
    );

}
export default MyBookmarks;