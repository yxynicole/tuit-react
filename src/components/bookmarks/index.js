import React from "react";
import Tuits from "../tuits";
import TagPanel from "../tags";
import MyBookmarks from "./my-bookmarks";
import {useState} from 'react';
import TagManagementModal from "./tag-management-modal";

function Bookmarks() {
    let tagManageButtonId = "tagManageButtonId"

    return (
        <div>
            <h1>Bookmarks Screen</h1>
            <TagPanel/>
            <MyBookmarks/>
            <Tuits/>
        </div>
    );
}

export default Bookmarks;