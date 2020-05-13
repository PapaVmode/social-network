import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../Common/Preloader';
import userPhoto from '../../../assets/images/userPhoto.jpg';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div>
    <div className={s.pictureContent}><img src="https://www.w3schools.com/howto/img_snow_wide.jpg"  /></div>
    {props.profile.photos.large ? <div className={s.avatar}><img src={props.profile.photos.large} /></div> : <div className={s.avatar}><img src={userPhoto} /></div> }
    {/* <div className={s.avatar}><img src='http://krsk.sibnovosti.ru/pictures/0506/2048/ispytanie_na_prochnost_ob_yatiya_holoda_i_zov_vysoty.jpg' /></div> */}
  </div>
}

export default ProfileInfo; 