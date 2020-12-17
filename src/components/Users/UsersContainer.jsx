import React from 'react';
import {connect} from 'react-redux';
import {
  follow, unfollow, setCurrentPage,
  toogleFollowingProgress, requestUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/preloader/preloader';
import {compose} from 'redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize, getTotalItemsCount,
  getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <div><Preloader/></div> : null}
      <Users
        totalItemsCount={this.props.totalItemsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalItemsCount: getTotalItemsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, toogleFollowingProgress, getUsers: requestUsers})
)(UsersContainer);