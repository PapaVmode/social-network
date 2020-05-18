import React from 'react';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleIsFetching,
  setToggleFollowingProgress
} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader.jsx';
import { usersAPI } from '../../api/api';



class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setToggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChenges = (pageNumber) => {
    this.props.setToggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setToggleIsFetching(false);
    });
  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users onPageChenges={this.onPageChenges}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setToggleFollowingProgress={this.props.setToggleFollowingProgress}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     setToogleIsFetching: (isFetching) => {
//       dispatch(setToggleIsFetchingAC(isFetching))
//     },
//   }
// }

const UsersContainer = connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching, setToggleFollowingProgress
})(UsersAPIComponent);

export default UsersContainer; 
