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

  // 게시물 삭제
  const deletePost = postId => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // 댓글
  const [comments, setComments] = useState([]);

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
        <Route path="/signup" element={<Signup users={users} addUser={addUser} />} />
        <Route path="/new" element={<NewPost addPost={addPost} currentUser={currentUser} />} />
        <Route path="/post/:id" element={<Post posts={posts} deletePost={deletePost} isLoggedIn={isLoggedIn} currentUser={currentUser} comments={comments} setComments={setComments} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
