import React from "react";
import Tuits from "../tuits";
import Tags from "../tags";
import MyBookmarks from "./my-bookmarks";

function Bookmarks () {
  return(
    <div>
        <h1>Bookmarks Screen</h1>
        <Tags/>
        <MyBookmarks/>
      <Tuits/>
    </div>
  );
}
export default Bookmarks;