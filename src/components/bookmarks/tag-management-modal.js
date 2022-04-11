import * as service from "../../services/tag-service"
import {useState, useRef} from "react";

function TagManagementModal({tuitTags, tagManageButtonId, createTag, deleteTag}) {
    const [inputTagName, setInputTagName] = useState("")
    const tagInputRef = useRef()
    return (
        <div>
            <div className="modal fade" id={tagManageButtonId} tabIndex="-1"
                 aria-labelledby="tagManageModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="tagManageModalLabel">Manage Tags</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            {tuitTags.map && tuitTags.map(t => {
                                return <span className="badge rounded-pill bg-secondary m-1 p-2"
                                             key={t._id}>
                                    <span className="m-1 btn-sm">{t.tagName}</span>
                                    <i className="fa-thin fa-pipe"/>
                                    <i className="fas fa-close btn-sm btn-outline-light"
                                       onClick={() => deleteTag(t.tagName)}/>
                                </span>
                            })}
                        </div>
                        <div className="modal-footer">
                            <div className="input-group">
                                <input type="text" className="form-control" ref={tagInputRef}
                                       placeholder="Enter tag name ..."
                                       onChange={(e) => setInputTagName(e.target.value)}
                                />
                                <button className="btn btn-outline-primary" type="button"
                                        onClick={() => {
                                            createTag(inputTagName)
                                            tagInputRef.current.value = ""
                                        }}>
                                    Create
                                </button>
                                <button className="btn btn-outline-secondary" type="button"
                                        data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TagManagementModal;