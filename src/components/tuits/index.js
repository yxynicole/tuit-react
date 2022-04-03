import React from "react";
import './tuits.css';
import Tuit from "./tuit";
import * as likesService from "../../services/like-service"

function Tuits({tuits = [], deleteTuit, refreshTuits}) {
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

    return (
        <div>
            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit => {
                        return (
                            <Tuit key={tuit._id} deleteTuit={deleteTuit} tuit={tuit}
                                  likeTuit={likeTuit} dislikeTuit={dislikeTuit}/>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Tuits;