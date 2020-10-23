import React from 'react';
import s from './News.module.css';
import MyPosts from './MyPosts/MyPosts';

const News = (props) => {
    return (
        <div>
            <MyPosts posts={props.newsPage.posts}
                addPost={props.addPost}
                newPostText={props.newsPage.newPostText}
                updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default News;