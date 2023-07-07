import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ users, setIsLoggedIn, setCurrentUser }) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginUser = { email, password };
        const user = users.find((user) => user.email === loginUser.email && user.password === loginUser.password);
        if (user) {
            setIsLoggedIn(true);
            setCurrentUser(user.userName);
            navigate('/');
        } else {
            setIsLoggedIn(false);
            setCurrentUser(null);
            alert('아이디와 비밀번호를 확인해주세요.');
        }
    };

    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    이메일:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    비밀번호:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <button type="submit">로그인</button>
            </form>
            <p>
                아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
            </p>
        </div>
    );
}

export default Login;
