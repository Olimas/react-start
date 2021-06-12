import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(d => (<DialogItem id={d.id} name={d.name}/>))
  let messagesElements = props.state.messages.map(m => (<Message id={m.id} message={m.message}/>))

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value
    alert(text)
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
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Send message</button>
      </div>
    </div>
  )
}

export default Dialogs;
