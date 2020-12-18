import React from 'react';
import userPhoto from '../../assets/img/profile.png';
import s from './Users.module.css';
import profilePhoto from './../../assets/img/profile-bg.jpg';
import {NavLink} from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div className="col-md-6">
      <div className={s.iqCard}>
        <div className="p-0">
          <div>
            <div className={s.coverContainer}>
              <img
                className={`${s.rounded} img-fluid w-100`}
                src={profilePhoto} alt="profileBg"/>
            </div>
            <div className={`${s.profileInfo} p-4`}>
              <div className={s.userDetail}>
                <div className="d-flex flex-wrap justify-content-between align-items-lg-start">
                  <div className="d-flex">
                    <div className={s.userImg}>
                      <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             alt="user-avatar"/>
                      </NavLink>
                    </div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                  </div>
                  {user.followed ?
                    <button className="btn btn-danger" disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                              unfollow(user.id);
                            }}>
                      Unfollow</button> :
                    <button className="btn btn-success" disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                              follow(user.id);
                            }}>
                      Follow</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;