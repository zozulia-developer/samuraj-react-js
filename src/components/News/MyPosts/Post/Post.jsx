import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className='col-sm-12'>
            <div className={`${s.iqCard} ${s.iqCardBlock} ${s.iqCardStretch} ${s.iqCardHeight}`}>
                <div className={s.iqCardBody}>
                    <div className={s.userPostData}>
                        <div className='d-flex flex-wrap'>
                            <div className={s.mediaSupportUserImg}>
                                <img className='rounded-circle' src="https://www.nationalplasto.in/img/profile.png" alt="userPic" />
                            </div>
                            <div className='media-support-info mt-2'></div>
                            <div className={s.iqCardPostToolbar}></div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>{props.message}</p>
                        <div>
                            <span>{props.likeCount} Likes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;