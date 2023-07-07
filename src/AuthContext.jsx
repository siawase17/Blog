import React, { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState('');

    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    const authContextValue = {
        user,
        isLoggedIn,
        login,
        logout,
        loginError,
    };

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
