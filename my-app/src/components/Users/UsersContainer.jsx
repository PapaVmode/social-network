import React from 'react';
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleIsFetching,
} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader.jsx';


class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
      this.props.setToggleIsFetching(false);
    });
  }

  onPageChenges = (pageNumber) => {
    this.props.setToggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
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
        unfollow={this.props.unfollow} />
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
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching,
})(UsersAPIComponent);

export default UsersContainer; 
