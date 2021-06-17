import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => (<DialogItem id={d.id} key={d.id} name={d.name}/>))
  let messagesElements = state.messages.map(m => (<Message id={m.id} key={m.id} message={m.message}/>))
  let newMessagesText = state.newMessagesText;

  let onAddMessage = () => {
    props.addMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value
    props.updateNewMessageText(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
        <textarea className={s.inputMessages} onChange={onMessageChange}
                  value={newMessagesText}
                  placeholder="Enter your message"></textarea>
          <button className={s.sendMessage} onClick={onAddMessage}>Send message</button>
        </div>
      </div>

    </div>
  )
}

export default Dialogs;
