import React, {useState} from "react";
import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import TuitVideo from "./tuit-video";
import TagManagementModal from "../bookmarks/tag-management-modal";
import * as service from "../../services/tag-service";

const Tuit = ({tuit, deleteTuit, likeTuit, dislikeTuit, bookmarkTuit}) => {
    const tid = tuit._id
    const tagManageButtonId = "tagManage" + tid
    const [tuitTags, setTuitTags] = useState([])

    const findTuitTags = () => {
        return service.findAllTagsByTuit('me', tid).then(setTuitTags)
    }
    const createTag = (tagName) => {
        service.createTag("me", tid, tagName).then(findTuitTags)
    }
    const deleteTag = (tagName) => {
        service.deleteTag("me", tid, tagName).then(findTuitTags)
    }

    return (
        <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
            <div className="pe-2">
                {
                    tuit.postedBy &&
                    <img src={`../images/${tuit.postedBy.username}.jpg`} alt="tuit avatar logo"
                         className="ttr-tuit-avatar-logo rounded-circle"/>
                }
            </div>
            <div className="w-100">
                {deleteTuit && <i onClick={() => deleteTuit(tuit._id)}
                   className="fas fa-remove fa-2x fa-pull-right"/>}
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
                <TuitStats tagManageButtonId={tagManageButtonId} tuit={tuit} likeTuit={likeTuit}
                           dislikeTuit={dislikeTuit} bookmarkTuit={bookmarkTuit} findTuitTags={findTuitTags}/>
            </div>
            <TagManagementModal tagManageButtonId={tagManageButtonId} tuitTags={tuitTags} createTag={createTag} deleteTag={deleteTag} />
        </li>
    );
}
export default Tuit;