import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}/>
  );
}

export default Profile;