import React from "react";
const BookmarkIcon = (bookmarked) =>{
    if(bookmarked){
        return (<i className="fa-solid fa-bookmark" style={{color:'blue'}}/>)
    }else{
        return (<i className="fa-solid fa-bookmark"/>)
    }
}
const BookmarkDropdown = (clickBookmark, clickTags, bookmarked) => {
    return (
        <div>
            <div className="dropdown">
                <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="far fa-inbox-out "/>
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <a className="dropdown-item" onClick={clickBookmark} href="#">
                            <BookmarkIcon bookmarked={bookmarked}/> Bookmark
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" onClick={clickTags} href="#">
                            <i className="fa-solid fa-tags"/> Manage Tags
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default BookmarkDropdown;