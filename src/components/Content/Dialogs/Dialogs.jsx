import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name="User 1" id="1"/>
        <DialogItem name="User 2" id="2"/>
        <DialogItem name="User 3" id="3"/>
        <DialogItem name="User 4" id="4"/>
        <DialogItem name="User 5" id="5"/>
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="Yo" />
        <Message message="Hi" />
        <Message message="How are you?" />
      </div>
    </div>
  )
}

export default Dialogs;
