import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsElement = props.dialogsPage.dialogs.map((item) => {
    return <Dialog name={item.name} id={item.id} />
  })
  let messagesElement = props.dialogsPage.messages.map((item) => {
    return <Message message={item.message} id={item.id} />
  })

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
        <div>
          <textarea value={props.dialogsPage.newMessageBody}
            cols="25" rows="5"
            placeholder="Enter your message"
            onChange={onNewMessageChange}></textarea>
          <input type="button" onClick={onSendMessageClick} value="Send" />
        </div>
      </div>
    </div>
  )
}

export default Dialogs; 
