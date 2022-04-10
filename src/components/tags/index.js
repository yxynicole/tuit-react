import React from "react";
import {useState, useEffect} from "react"
import * as service from "../../services/tag-service"

function TagPanel() {
    const [userTags, setUserTags] = useState([])

    const findAllTagsByUser = () => {
        service.findAllTagsByUser("me").then(setUserTags)
    }

    useEffect(findAllTagsByUser, [setUserTags])

    return (
        <div className="container-lg">
            {userTags.map && userTags.map(tag_association => {
                return (<div key={tag_association._id}>
                    <span className="badge rounded-pill bg-secondary m-1 p-2" >
                        <span className="m-1 btn-sm">{tag_association.tag.tagName}</span>
                    </span>
                </div>)
            })}
        </div>
    )
}

export default TagPanel;