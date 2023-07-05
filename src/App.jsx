import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 수정된 부분
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
