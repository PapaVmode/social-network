import React from 'react';
import userPhoto from '../../assets/images/userPhoto.jpg';
import s from './Users.module.css';

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
            <img src={t.photos.small != null ? t.photos.small : userPhoto} alt="" />
          </div>
          <div>
            {t.followed
              ? <button onClick={() => props.unfollow(t.id)}>Follow</button>
              : <button onClick={() => props.follow(t.id)}>Unfollow</button>}
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