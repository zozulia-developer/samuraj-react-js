import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.kirupa.com/html5/images/images_scaled.png' alt="pic" />
                <div className={s.descriptionBlock}>
                    <img src='https://www.nationalplasto.in/img/profile.png' alt="profileImg" />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;