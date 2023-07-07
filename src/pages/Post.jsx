import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

function Post({ posts }) {
    // 현재 URL의 매개변수 가져오기
    const { id } = useParams();
    // posts 배열에서 해당 id를 가진 게시물 찾기
    const post = posts.find((post) => post.id === Number(id));

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default Post;
