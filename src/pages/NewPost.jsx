import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import autosize from 'autosize';

function NewPost({ addPost, currentUser }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        autosize(document.querySelector('textarea')); // textarea에 autosize 적용
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { id: Date.now(), author: currentUser, createdAt: new Date(), title, content };
        addPost(newPost);
        navigate(`/`);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    return (
        <div className='newpost'>
            <h1>New post</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    className='title'
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    className='content'
                    placeholder="content"
                    value={content}
                    onChange={handleContentChange}
                ></textarea>
                <button className='submit' type="submit">작성</button>
            </form>
            <button className='main' onClick={() => navigate('/')}>Home</button>
        </div>
    );
}

export default NewPost;
