import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return <div className='{s.item}'>
          <img src="http://krsk.sibnovosti.ru/pictures/0506/2048/ispytanie_na_prochnost_ob_yatiya_holoda_i_zov_vysoty.jpg" alt="" />
          {props.message}
          <div>
            <span>like{props.like}</span>
          </div>
         </div>
}

export default Post; 