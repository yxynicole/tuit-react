import React from "react";
const BookmarkIcon = ({bookmarked}) =>{
    if(bookmarked){
        return (<i className="fa-solid fa-bookmark" style={{color:'blue'}}/>)
    }else{
        return (<i className="fa-solid fa-bookmark" style={{color:'black'}}/>)
    }
}

const BookmarkDropdown = ({ tagManageButtonId,bookmarked, bookmarkTuit} ) => {


    return (
        <div>
            <div className="dropdown">
                <div id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="far fa-inbox-out "/>
                </div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <div className="dropdown-item" onClick={bookmarkTuit}>
                            <BookmarkIcon  bookmarked={bookmarked}/>
                            <span className="m-1">Bookmark</span>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown-item" data-bs-toggle="modal" data-bs-target={"#"+tagManageButtonId}>
                            <i className="fa-solid fa-tags"/>
                            <span className="m-1">Manage Tags</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default BookmarkDropdown;