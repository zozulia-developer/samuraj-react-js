import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/profile.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div className="col-sm-12">
      <div className={s.iqCard}>
        <div className={`${s.iqCardBody} ${s.profilePage} p-0`}>
          <div className={s.profileHeader}>
            <div className={s.coverContainer}>
              <img
                className={`${s.rounded} img-fluid`}
                src="https://insurtechgateway.com/wp-content/uploads/2019/05/blur-city-dark-394377-1110x270.jpg" alt="profileBackground"/>
            </div>
            <div className={`${s.userDetail} text-center mb-3`}>
              <div className={s.profileImg}>
                <img
                  className={`${s.avatar130} img-fluid`}
                  src={profile.photos.large || userPhoto} alt="profileImg"/>
              </div>
              <div className={s.profileDetail}>
                <h3>{profile.fullName}</h3>
                <ProfileStatusWithHooks
                  status={status}
                  updateStatus={updateStatus}/>
              </div>
            </div>
            <div className={`${s.profileInfo} p-4 d-flex align-items-center justify-content-between position-relative`}>
              <div className={s.socialLinks}>
                <ul className="d-flex align-items-center justify-content-between list-inline p-0 m-0">
                  <li className="text-center pr-3">
                    Facebook
                  </li>
                  <li className="text-center pr-3">
                    Instagram
                  </li>
                  <li className="text-center pr-3">
                    Youtube
                  </li>
                </ul>
              </div>
              <div className={s.socialInfo}>
                <ul className="d-flex align-items-center justify-content-between list-inline p-0 m-0">
                  <li className="text-center pl-3">
                    <h6>Posts</h6>
                    <p>0</p>
                  </li>
                  <li className="text-center pl-3">
                    <h6>Followers</h6>
                    <p>0</p>
                  </li>
                  <li className="text-center pl-3">
                    <h6>Following</h6>
                    <p>0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
          </div>

          {editMode ?
            <ProfileDataForm profile={profile}/> :
            <ProfileData goToEditMode={() => {
              setEditMode(true)
            }} profile={profile} isOwner={isOwner}/>}
        </div>
      </div>
    </div>
  );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <div>
        <button className="btn btn-primary" onClick={goToEditMode}>Редактировать профиль</button>
      </div>}
      <div>
        <b>Facebook:</b> {profile.contacts.facebook}
      </div>
      <div>
        <b>В поиске работы:</b> {profile.lookingForAJob ? "Да" : "Нет"}
      </div>
      <div>
        <b>Скиллы:</b> {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Обо мне:</b> {profile.aboutMe}
      </div>
    </div>
  )
}

export default ProfileInfo;