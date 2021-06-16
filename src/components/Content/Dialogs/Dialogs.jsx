import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem id={d.id} name={d.name}/>))
  let messagesElements = props.dialogsPage.messages.map(m => (<Message id={m.id} message={m.message}/>))

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (e) => {
    let text = e.target.value
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div>
        <textarea onChange={onMessageChange}
                  value={props.dialogsPage.newMessagesText}
                  placeholder="Enter your message"></textarea>
        <button onClick={addMessage}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;
