import React from 'react';
import s from './News.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const News = (props) => {
    return (
        <div className="col-lg-8 row m-0 p-0">
            <MyPostsContainer />
        </div>
    )
}

export default News;