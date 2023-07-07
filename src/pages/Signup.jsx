import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ addUser }) {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUseNameChange = e => {
        setUserName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {userName, email, password};
        addUser(newUser);
        navigate('/login');
    };

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    사용자 이름:
                    <input type="name" value={userName} onChange={handleUseNameChange}/>
                </label>
                <label>
                    이메일:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    비밀번호:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default Signup;
