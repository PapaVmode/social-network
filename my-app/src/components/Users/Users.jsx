import React from 'react';
import userPhoto from '../../assets/images/userPhoto.jpg';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {
        pages.map(p => {
          return <span className={props.currentPage === p && s.selectedPage}
            onClick={(e) => { props.onPageChenges(p) }}> {p} </span>
        })}
    </div>
    {props.users.map(t =>
      <div key={t.id}>
        <div className={s.userBlock}>
          <div>
            <NavLink to={`${/profile/}${t.id}`}>
              <img src={t.photos.small != null ? t.photos.small : userPhoto} alt="" />
            </NavLink>
          </div>
          <div>
            {t.followed

              ? <button disabled={props.followingInProgress.some(id => id === t.id)} onClick={() => {
                props.setToggleFollowingProgress(true, t.id)
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${t.id}`,
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": '6d256147-ebe3-4533-9cde-74c76ea0f542'
                    }
                  })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(t.id)
                      props.setToggleFollowingProgress(false, t.id)
                    }
                  });

              }}>Unfollow</button>

              :

              <button disabled={props.followingInProgress.some(id => id === t.id)} onClick={() => {

                props.setToggleFollowingProgress(true, t.id);
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${t.id}`, {},
                  {
                    withCredentials: true,
                    headers: {
                      "API-KEY": '6d256147-ebe3-4533-9cde-74c76ea0f542'
                    }
                  })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(t.id)
                      debugger
                      props.setToggleFollowingProgress(false, t.id)
                    }
                  });

              }}>Follow</button>}
          </div>
        </div>
        <div className={s.messageBlock}>
          <span>
            <div>{t.name}</div>
            <div>{t.status}</div>
          </span>
          <span>
            <div>{'t.location.country'}</div>
            <div>{'t.location.city'}</div>
          </span>
        </div>
      </div>)
    }
  </div>
}

export default Users;