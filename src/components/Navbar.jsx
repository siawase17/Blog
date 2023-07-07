import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isLoggedIn, currentUser, handleLogout }) {
    const navigate = useNavigate();

    const handleNewPostClick = () => {
        if (isLoggedIn) {
            navigate('/new');
        } else {
            alert('로그인 후 이용가능합니다.');
            navigate('/login');
        }
    };

    return (
        <nav className='nav'>
            <h1>
                <Link to="/">Mylog</Link>
            </h1>
            <div className='NewLogin'>
                <p className='newPost'>
                    <button onClick={handleNewPostClick}>New post</button>
                </p>
                {isLoggedIn ? (
                    <p className="login">
                        <span>Logged in as {currentUser}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </p>
                ) : (
                    <p className="login">
                        <Link to="/login">Login/Signup</Link>
                    </p>
                )}
            </div>
        </nav>
    );
}

export default Navbar; 
