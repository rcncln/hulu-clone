import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <div className="header-icon">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header-icon">
                    <FlashOnIcon />
                    <p>Lightning</p>
                </div>
                <div className="header-icon">
                    <LiveTvIcon />
                    <p>TV</p>
                </div>
                <div className="header-icon">
                    <VideoLibraryIcon />
                    <p>Videos</p>
                </div>
                <div className="header-icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header-icon">
                    <PersonOutlineIcon />
                    <p>logIn</p>
                </div>
            </div>
            <div className="header-right">
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Hulu_logo_%282007%29.svg"></img>
            </div>
        </div>
    )
}

export default Header
