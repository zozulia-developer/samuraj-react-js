import React from 'react';
import s from './News.module.css';
import MyPosts from './MyPosts/MyPosts';

const News = (props) => {
    return (
        <div>
            <MyPosts posts={props.newsPage.posts}
                newPostText={props.newsPage.newPostText}
                dispatch={props.dispatch} />
        </div>
    )
}

export default News;