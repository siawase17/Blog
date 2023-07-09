import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import autosize from 'autosize';

function Post({ posts, deletePost, isLoggedIn, currentUser, comments, setComments }) {
    const navigate = useNavigate();

    // 현재 URL의 매개변수 가져오기
    const { id } = useParams();
    // posts 배열에서 해당 id를 가진 게시물 찾기
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = posts.find((post) => post.id === Number(id));
        setPost(foundPost);
        // 게시물이 업데이트될 때마다 초기값 설정
        if (foundPost) {
            setUpdatedTitle(foundPost.title);
            setUpdatedContent(foundPost.content);
        }
    }, [id, posts]);

    // 게시물 수정
    const [editMode, setEditMode] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedContent, setUpdatedContent] = useState('');
    const contentTextareaRef = useRef(null);

    useEffect(() => {
        if (editMode) {
            autosize(contentTextareaRef.current); // 수정 모드로 전환될 때 autosize 호출
        }
    }, [editMode]);
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
        const confirmDelete = window.confirm('게시물을 삭제하시겠습니까?');
        if (confirmDelete) {
            deletePost(post.id);
            navigate('/');
        }
    }

    // 댓글 기능
    const [comment, setComment] = useState('');

    const handleCommentChange = e => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = { user: isLoggedIn ? currentUser : '익명', content: comment, createdAt: new Date().toLocaleString() };
        // 해당 게시물의 댓글만 업데이트
        setComments(prevComments => {
            const updatedComments = { ...prevComments, [id]: [...(prevComments[id] || []), newComment] };
            return updatedComments;
        });
        setComment('');
    };
    // 해당 게시물의 댓글 가져오기
    const postComments = comments[id] || [];

    // 게시물이 존재하지 않는 경우 처리
    if (post === null) {
        return <div>게시물을 찾을 수 없습니다.</div>;
    }

    return (
        <div className='post'>
            <h1 className='title'>{editMode ? <input className='editTitle' value={updatedTitle} onChange={handleTitleChange} /> : post.title}</h1>
            <p className='create'>{post.author} | {post.createdAt.toLocaleString()}</p>
            <p className='content'>{editMode ? <textarea className='editContent' ref={contentTextareaRef} value={updatedContent} onChange={handleContentChange} /> : post.content}</p>
            <div className='button'>
                {isLoggedIn && editMode ? (
                    <button className='save' onClick={handleSave}>저장</button>
                ) : (
                    isLoggedIn && <button className='edit' onClick={handleEdit}>수정</button>
                )}
                {isLoggedIn && <button className='delete' onClick={handleDelete}>삭제</button>}
                <button className='main' onClick={() => navigate('/')}>Home</button>
            </div>

            <p class="line"></p>
            <form className='comment' onSubmit={handleCommentSubmit}>
                <textarea className='input' type="text" value={comment} onChange={handleCommentChange} />
                <button className='submit' type="submit">댓글 작성</button>
            </form>
            <ul className='comments'>
                {postComments.map((comment, index) => (
                    <li className='single' key={index}>
                        {comment.user && <p className='userDate'>{comment.user} | {comment.createdAt}</p>}
                        {comment.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Post;
