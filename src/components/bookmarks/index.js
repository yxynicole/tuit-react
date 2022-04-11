import React from "react";
import Tuits from "../tuits";
import TagPanel from "../tags";
import MyBookmarks from "./my-bookmarks";
import {useState} from 'react';
import * as bookmark_service from "../../services/bookmark-service";
import * as tag_service from "../../services/tag-service"

function Bookmarks() {
    const [bookmarkedTuits, setBookmarkedTuits] = useState([]);
    const [filteredTags, setFilteredTags] = useState([]);

    const findTuitsIBookmarked = (filterTags = []) => {
        bookmark_service.findAllTuitsBookmarkedByUser("me", filterTags).then(setBookmarkedTuits);
    }

    const isSelected = (tagName) => {
        return filteredTags.indexOf(tagName) >= 0
    }

    const updateFilterTags = (clickedTag) => {
        let updatedTags;
        if (filteredTags.indexOf(clickedTag) >= 0) {
            updatedTags = filteredTags.filter(t => clickedTag !== t)
        } else {
            updatedTags = [clickedTag].concat(filteredTags)
        }
        setFilteredTags(updatedTags)
        findTuitsIBookmarked(updatedTags)
    }
    return (
        <div>
            <h1>Bookmarks Screen</h1>
            <TagPanel isSelected={isSelected} updateFilterTags={updateFilterTags}/>
            <MyBookmarks bookmarkedTuits={bookmarkedTuits} refreshTuits={findTuitsIBookmarked}/>
            <Tuits/>
        </div>
    );
}

export default Bookmarks;