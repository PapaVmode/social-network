import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return <div>
          <div className={s.pictureContent}><img src="https://www.w3schools.com/howto/img_snow_wide.jpg" /></div>
          <div className={s.avatar}><img src='http://krsk.sibnovosti.ru/pictures/0506/2048/ispytanie_na_prochnost_ob_yatiya_holoda_i_zov_vysoty.jpg' /></div>
        </div>
}

export default ProfileInfo; 