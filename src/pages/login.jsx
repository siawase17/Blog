import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Login() {
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
        navigate('/');
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
