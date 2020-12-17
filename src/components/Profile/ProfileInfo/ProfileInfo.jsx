import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/profile.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div>
        <div className={s.descriptionBlock}>
          <img src={profile.photos.large || userPhoto} alt="profileImg"/>
          <div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
          </div>
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