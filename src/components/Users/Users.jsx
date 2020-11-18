import React from 'react';
import userPhoto from '../../assets/img/profile.png';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div className={s.pageNumbers}>
      {pages.map(page => {
        return <span className={`${s.pageNumber} ${props.currentPage === page && s.selectedPage}`}
          onClick={(e) => { props.onPageChanged(page) }}>
          {page}
        </span>
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div className={s.userImg}>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small != null ? u.photos.small : userPhoto}
                alt="user-avatar" />
            </NavLink>
          </div>
          <div>
            {u.followed ?
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => { props.unfollow(u.id); }}>
                Unfollow</button> :
              <button disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => { props.follow(u.id); }}>
                Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;