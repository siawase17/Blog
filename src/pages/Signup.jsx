import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Signup() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('이메일:', email);
        console.log('비밀번호:', password);

        const userData = {
            email,
            username: '사용자 이름',
        };

        login(userData);
        navigate('/login');
    };

    return (
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
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
