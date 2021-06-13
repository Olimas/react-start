import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => (<DialogItem id={d.id} name={d.name}/>))
  let messagesElements = props.dialogsPage.messages.map(m => (<Message id={m.id} message={m.message}/>))

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessagesText(text);
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
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessagesText}></textarea>
        <button onClick={addMessage}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;
