import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">My-blog</Link>
                </li>
                <li>
                    <Link to="/login">Login/Signup</Link>
                </li>
                <li>
                    <Link to="/new">New post</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
