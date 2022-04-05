import React, {useState} from "react";
const BookmarkIcon = ({bookmarked}) =>{
    if(bookmarked){
        return (<i className="fa-solid fa-bookmark" style={{color:'blue'}}/>)
    }else{
        return (<i className="fa-solid fa-bookmark" style={{color:'black'}}/>)
    }
}

const BookmarkDropdown = ({clickTags, bookmarked, bookmarkTuit} ) => {
    return (
        <div>
            <div className="dropdown">
                <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="far fa-inbox-out "/>
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <div className="dropdown-item" onClick={bookmarkTuit}>
                            <BookmarkIcon  bookmarked={bookmarked}/> Bookmark
                        </div>
                    </li>
                    <li>
                        <div className="dropdown-item" onClick={clickTags} >
                            <i className="fa-solid fa-tags"/> Manage Tags
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default BookmarkDropdown;