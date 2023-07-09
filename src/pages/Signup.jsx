import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ addUser, users }) {
    const navigate = useNavigate();

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [existingError, setExistingError] = useState(false);

    const handleUseNameChange = (e) => {
        setUserName(e.target.value);
        setExistingError(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setExistingError(false);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 사용자 이름, 이메일 중복 확인
        const isExisting = users.some(
            (user) => user.userName === userName || user.email === email
        );

        if (isExisting) {
            setExistingError(true);
        } else if (password !== confirmPassword) {
            setPasswordMismatch(true);
        } else {
            const newUser = { userName, email, password };
            addUser(newUser);
            navigate('/login');
        }
    };

    return (
        <div className='signup'>
            <h1>Sign Up</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    사용자 이름:
                    <br />
                    <input type="name" value={userName} onChange={handleUseNameChange} />
                </label>
                <label>
                    이메일:
                    <br />
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <label>
                    비밀번호:
                    <br />
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <label>
                    비밀번호 확인:
                    <br />
                    <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                </label>
                {existingError && (
                    <p style={{ color: 'red' }}>이미 존재하는 사용자 이름 또는 이메일입니다</p>
                )}
                {passwordMismatch && (
                    <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다</p>
                )}
                <button className='submit' type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default Signup;
