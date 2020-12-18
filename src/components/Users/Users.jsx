import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalItemsCount, pageSize, onPageChanged, users, ...props}) => {
  return (<>
    < Paginator
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      totalItemsCount={totalItemsCount}
      pageSize={pageSize}
    />
    {
      users.map(u => <User
        user={u}
        key={u.id}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
        follow={props.follow}/>)
    }
  </>)
}

export default Users;