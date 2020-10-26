import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/news-reducer';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
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
                        <form className={`${s.postText} ml-3 w-100`} action="">
                            <input
                                className="form-control rounded"
                                type="text"
                                placeholder="Напишите сообщение..."
                                onChange={onPostChange}
                                ref={newPostElement}
                                value={props.newPostText} />
                        </form>
                    </div>
                    <div>
                        <button className="btn btn-primary d-block w-100 mt-3" onClick={addPost}>Add post</button>
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

export default MyPosts;