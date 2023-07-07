import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPost({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { id: Date.now(), title, content };
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
        <div>
            <h1>새 글 작성</h1>
            <form onSubmit={handleSubmit}>
                <label><input
                        type="text"
                        placeholder="제목"
                        value={title}
                        onChange={handleTitleChange}
                    /></label>
                <label><textarea
                    placeholder="본문"
                    value={content}
                    onChange={handleContentChange}
                ></textarea></label>
                <button type="submit">작성</button>
            </form>
            <button onClick={() => navigate('/')}>메인 페이지로 이동</button>
        </div>
    );
}

export default NewPost;
