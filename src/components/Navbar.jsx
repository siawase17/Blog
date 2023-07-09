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
                <button className='newPost' onClick={handleNewPostClick}>New post</button>
                {isLoggedIn ? (
                    <p className="login">
                        <span>{currentUser}</span>
                        <button className='logout'onClick={handleLogout}>Logout</button>
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
