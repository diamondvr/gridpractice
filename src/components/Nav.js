import React from 'react';
import '../css/Nav.css'

function Nav() {
    return (
        <div className="navBar">
            <ul className="menuList">
                <li>Home</li>
                <li>Friends</li>
                <li>People</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Nav;