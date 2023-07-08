import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Post({ posts, deletePost }) {
    const navigate = useNavigate();

    // 현재 URL의 매개변수 가져오기
    const { id } = useParams();
    // posts 배열에서 해당 id를 가진 게시물 찾기
    const post = posts.find((post) => post.id === Number(id));

    // 게시물 수정
    const [editMode, setEditMode] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(post.title);
    const [updatedContent, setUpdatedContent] = useState(post.content);
    // 게시물 수정 이벤트 핸들러
    const handleEdit = () => {
        setEditMode(true);
    }
    // 게시물 저장 이벤트 핸들러
    const handleSave = () => {
        post.title = updatedTitle;
        post.content = updatedContent;
        setEditMode(false);
    }
    // 게시물 제목 변경 이벤트 핸들러
    const handleTitleChange = e => {
        setUpdatedTitle(e.target.value);
    }
    // 게시물 내용 변경 이벤트 핸들러
    const handleContentChange = e => {
        setUpdatedContent(e.target.value);
    }

    // 게시물 삭제 이벤트 핸들러
    const handleDelete = () => {
        alert('게시물을 삭제하시겠습니까?');
        deletePost(post.id);
        navigate('/');
    }

    // 게시물이 존재하지 않는 경우 처리
    if (!post) {
        return <alert>게시물을 찾을 수 없습니다.</alert>;
    }

    return (
        <div>
            <h1>{editMode ? <input value={updatedTitle} onChange={handleTitleChange} /> : post.title}</h1>
            <p>작성자: {post.author}</p>
            <p>작성일: {post.createdAt.toLocaleString()}</p>
            <p>{editMode ? <textarea value={updatedContent} onChange={handleContentChange} /> : post.content}</p>
            {editMode ? (
                <button onClick={handleSave}>저장</button>
            ) : (
                <button onClick={handleEdit}>수정</button>
            )}
            <button onClick={handleDelete}>삭제</button>
            <button onClick={() => navigate('/')}>메인 페이지로 이동</button>
        </div>
    );
}

export default Post;
