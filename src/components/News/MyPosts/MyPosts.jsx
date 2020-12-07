import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className="col-sm-12">
            <div id="post-modal-data" className={`${s.iqCard} ${s.iqCardBlock} ${s.iqCardStretch} ${s.iqCardHeight}`}>
                <div className={`${s.iqCardHeader} d-flex justify-content-between`}>
                    <div className={`${s.iqHeaderTitle}`}>
                        <h4 className="card-title">Создать Пост</h4>
                    </div>
                </div>
                <div className={s.iqCardBody} data-toggle="modal" data-target="#post-modal">
                    <div className="d-flex align-items-center">
                        <div className={s.userImg}>
                            <img className={`${s.avatar60} rounded-circle`} src="https://www.nationalplasto.in/img/profile.png" alt="userImg" />
                        </div>
                        <PostReduxForm onSubmit={addNewPost}/>
                    </div>
                    <hr />
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
}

const PostForm = (props) => {
    return (
        <form
            className={`${s.postText} ml-3 w-100`}
            onSubmit={props.handleSubmit}>
            <Field
                component={"input"}
                name={"newPostText"}
                className="form-control rounded"
                placeholder="Напишите сообщение..."
                value={props.newPostText} />
            <div>
                <button className="btn btn-primary d-block w-100 mt-3">Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(PostForm)

export default MyPosts;