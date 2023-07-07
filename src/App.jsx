import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Post from './pages/Post';
import Login from './pages/login';
import Signup from './pages/Signup';
import { AuthProvider } from './AuthContext';


function App() {
  const [posts, setPosts] = useState([]);
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home posts={posts} />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/new" element={<NewPost addPost={addPost} />} />
          <Route path="/post/:id" element={<Post posts={posts} />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
