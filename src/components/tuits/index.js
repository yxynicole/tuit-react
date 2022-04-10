import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/like-service"
import * as bookmarkService from "../../services/bookmark-service";
import TagManagementModal from "../bookmarks/tag-management-modal";

function Tuits({ tuits = [], deleteTuit, refreshTuits}) {
    const likeTuit = (tuit) => {
        return likesService
            .userToggleLike("me", tuit._id)
            .then((d) => {
                refreshTuits()
            }).catch(e => alert(e))
    }

    const dislikeTuit = (tuit) => {
        return likesService
            .userToggleDislike("me", tuit._id)
            .then((d) => {
                refreshTuits()
            }).catch(e => alert(e))
    }
    const bookmarkTuit = (tuit) => {
        return bookmarkService.userToggleBookmark("me", tuit._id)
            .then((d) => {
                refreshTuits()
            }).catch(e => alert(e))
    }
    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit => {
                        return (
                            <Tuit key={tuit._id}
                                  deleteTuit={deleteTuit} tuit={tuit}
                                  likeTuit={likeTuit} dislikeTuit={dislikeTuit}
                                  bookmarkTuit={bookmarkTuit}
                            />
                        );
                    })
                }
            </ul>

        </div>
    );
}

export default Tuits;