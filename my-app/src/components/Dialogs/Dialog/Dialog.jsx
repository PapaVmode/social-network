import React from 'react';
import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
}

export default Dialog; 