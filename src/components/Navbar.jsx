import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='nav'>
            <h1>
                <Link to="/">Mylog</Link>
            </h1>
            <div className='NewLogin'>
                <p className='newPost'>
                    <Link to="/new">New post</Link>
                </p>
                <p className='login'>
                    <Link to="/login">Login/Signup</Link>
                </p>
            </div>
        </nav>
    );
}

export default Navbar; 
