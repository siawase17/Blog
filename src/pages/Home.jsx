import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
    // 가상의 게시물 데이터
    const posts = [
        { id: 1, title: '첫 번째 게시물' },
        { id: 2, title: '두 번째 게시물' },
        { id: 3, title: '세 번째 게시물' },
    ];

    return (
        <div>
            <h1>블로그 타이틀</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/new">새 글 작성</Link>
        </div>
    );
}

export default Main;
