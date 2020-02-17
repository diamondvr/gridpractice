import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css'

function Nav() {
    return (
        <div className="navBar">
            <ul className="menuList">
                <li><Link to="/feed" className="link">Feed</Link></li>
                <li>Friends</li>
                <li><Link to="/people" className="link">People</Link></li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Nav;