import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Home( {posts} ) {
    const MAX_CONTENT_LENGTH = 200; // 게시물 목록에 표시되는 내용 최대 길이
    const trimContent = content => {
        if (content.length <= MAX_CONTENT_LENGTH) {
            return content;
        } else {
            return content.substr(0, MAX_CONTENT_LENGTH); // 일정 길이까지만 반환
        }
    }

    return (
        <div className='home'>
            <ul className='posts'>
                <h1 className='homestr'>Home</h1>
                <p class="line"></p>
                {posts.map((post) => (
                    <li key={post.id}>

                        <Link to={`/post/${post.id}`}>
                            <h3 className='title'>{post.title}</h3>
                            <p className='createdAt'>{post.createdAt.toDateString()}</p>
                            <p>{trimContent(post.content)}</p>
                            <p class="line"></p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
