import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg" />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;