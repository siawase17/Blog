import React from 'react';
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
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
