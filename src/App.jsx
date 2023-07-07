import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Post from './pages/Post';
import Login from './pages/login';
import Signup from './pages/Signup';

function App() {
  // 게시물
  const [posts, setPosts] = useState([]);
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // 로그인
  const [users, setUser] = useState([]);
  const addUser = (newUser) => {
    setUser([...users, newUser])
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} currentUser={currentUser} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/login" element={<Login users={users} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<Signup addUser={addUser} />} />
        <Route path="/new" element={<NewPost addPost={addPost} />} />
        <Route path="/post/:id" element={<Post posts={posts} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
