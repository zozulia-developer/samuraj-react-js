import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} alt="profileImg" />
          <ProfileStatus status={"Hello my friends!"}/>
          <div>
            <div>Имя: {props.profile.fullName}</div>
            <div>Facebook: {props.profile.contacts.facebook}</div>
            <div>Статус: {props.profile.lookingForAJobDescription}</div>
            <div>Обо мне: {props.profile.aboutMe}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;