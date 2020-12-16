import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <div className={s.descriptionBlock}>
          <img src={profile.photos.large} alt="profileImg" />
          <ProfileStatusWithHooks
              status={status}
              updateStatus={updateStatus}/>
          <div>
            <div>Имя: {profile.fullName}</div>
            <div>Facebook: {profile.contacts.facebook}</div>
            <div>Статус: {profile.lookingForAJobDescription}</div>
            <div>Обо мне: {profile.aboutMe}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;