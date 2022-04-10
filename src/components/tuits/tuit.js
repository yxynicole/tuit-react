import React from "react";
import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import TuitVideo from "./tuit-video";
import TagManagementModal from "../bookmarks/tag-management-modal";

const Tuit = ({tuit, deleteTuit, likeTuit, dislikeTuit, bookmarkTuit}) => {
    const tagManageButtonId = "tagManageButtonId"

    return(
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {
          tuit.postedBy &&
          <img src={`../images/${tuit.postedBy.username}.jpg`} alt="tuit avatar logo"
               className="ttr-tuit-avatar-logo rounded-circle"/>
        }
      </div>
      <div className="w-100">
          <i onClick={() => deleteTuit(tuit._id)} className="fas fa-remove fa-2x fa-pull-right" />
        <h2
          className="fs-5">
          {tuit.postedBy && tuit.postedBy.username}
          @{tuit.postedBy && tuit.postedBy.username} -
          {tuit.published}</h2>
        {tuit.tuit}
        {
          tuit.youtube &&
            <TuitVideo tuit={tuit}/>
        }
        {
          tuit.image &&
          <TuitImage tuit={tuit}/>
        }
        <TuitStats tagManageButtonId={tagManageButtonId} tuit={tuit} likeTuit={likeTuit} dislikeTuit={dislikeTuit} bookmarkTuit={bookmarkTuit} />
      </div>
        <TagManagementModal tagManageButtonId={tagManageButtonId} tid={tuit._id}/>
    </li>
  );
}
export default Tuit;