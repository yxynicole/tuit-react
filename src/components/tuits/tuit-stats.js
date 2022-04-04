import React from "react";
import BookmarkDropdown from "./tuit-bookmark-dropdown";
const TuitStats = ({tuit, likeTuit, dislikeTuit}) => {

    if (tuit.stats) {
        return (
            <div className="row mt-2">
                <div className="col">
                    <i className="far fa-message me-1" />
                    {tuit.stats && tuit.stats.replies}
                </div>
                <div className="col">
                    <i className="far fa-retweet me-1" />
                    {tuit.stats && tuit.stats.retuits}
                </div>
                <div className="col">
                    <span onClick={() => likeTuit(tuit)}>
                        {
                            tuit.stats.likes > 0 &&
                            <i className="fas fa-thumbs-up"
                               style={{color: 'red'}} />
                        }
                            {
                                tuit.stats.likes <= 0 &&
                                <i className="far fa-thumbs-up" />
                            }
                            {tuit.stats && tuit.stats.likes}
                    </span>
                </div>
                <div className="col">
                    <span onClick={()=> dislikeTuit(tuit)}>
                        {
                            tuit.stats.dislikes > 0 &&
                            <i className="far fa-thumbs-down" style={{color: 'grey'}}/>
                        }
                        {
                            tuit.stats.dislikes <= 0 &&
                            <i className="far fa-thumbs-down"/>
                        }
                        {tuit.stats && tuit.stats.dislikes}
                    </span>
                </div>
                <div className="col">
                    <BookmarkDropdown/>
                </div>
            </div>
        );
    } else {
        return ""
    }

}

export default TuitStats