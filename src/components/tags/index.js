import React from "react";
import {useState, useEffect} from "react"
import * as tag_service from "../../services/tag-service";

function TagPanel({updateFilterTags, isSelected}) {
    const [userTags, setUserTags] = useState([])
    const findAllTagsByUser = () => {
        tag_service.findAllTagsByUser("me").then(setUserTags)
    }
    useEffect(findAllTagsByUser, [setUserTags])

    return (
        <div className="container-fluid">
            {userTags.map && userTags.map(tag_association => {
                const tagName = tag_association.tag.tagName;
                const selected = isSelected(tagName)
                const classNames = selected ? "badge rounded-pill bg-primary m-1 p-2"
                                            : "badge rounded-pill bg-secondary m-1 p-2"
                return (
                    <span className={classNames} key={tag_association._id}>
                        <span className="m-1 btn-sm" onClick={() => updateFilterTags(tagName)}>
                            {tagName}
                        </span>
                    </span>
                )
            })}
        </div>
    )
}

export default TagPanel;