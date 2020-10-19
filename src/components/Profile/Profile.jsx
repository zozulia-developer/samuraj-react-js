import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <img src='https://www.kirupa.com/html5/images/images_scaled.png' />
            <div>
                <img src='https://www.nationalplasto.in/img/profile.png' />
            </div>
           <MyPosts />
        </div>
    );
}

export default Profile;