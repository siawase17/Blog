import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    // 가상의 게시물 데이터
    const posts = [
        { id: 1, title: '첫 번째 게시물' },
        { id: 2, title: '두 번째 게시물' },
        { id: 3, title: '세 번째 게시물' },
    ];

    return (
        <div>
            <h1>블로그 홈</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
