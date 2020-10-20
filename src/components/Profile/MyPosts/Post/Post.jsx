import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg" alt="userPic"/>
            {props.message}
            <div>
                <span>Likes: {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;