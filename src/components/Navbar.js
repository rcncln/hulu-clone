import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar-icon">Trending</h2>
            <h2 className="navbar-icon">Top Rating</h2>
            <h2 className="navbar-icon">Action</h2>
            <h2 className="navbar-icon">Comedy</h2>
            <h2 className="navbar-icon">Horror</h2>
            <h2 className="navbar-icon">Romance</h2>
            <h2 className="navbar-icon">Mystery</h2>
            <h2 className="navbar-icon">Sci-Fi</h2>
            <h2 className="navbar-icon">Western</h2>
            <h2 className="navbar-icon">Animation</h2>
        </div>
    )
}

export default Navbar
