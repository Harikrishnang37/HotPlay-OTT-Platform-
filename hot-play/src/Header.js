import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header (props)
{
    return(
        <div className="header">
            <div className="logo">
                Hotplay
            </div>

            <div className = "searchbar">
                <input type = "text" placeholder="Search"/>
                <button className="search-button"> <SearchIcon className="icon"/></button>
            </div>

            <div className="header-rightside-options">
                <button className="profile-button"><AccountCircleIcon className="icon"/></button>
                <button className="toggle-menu"><MenuIcon className="icon"/></button>
            </div>
            
        </div>
    )
}