import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }

  return (<Dialogs addMessage={onAddMessage} updateNewMessageText={onMessageChange} dialogsPage={state}/>)
}

export default DialogsContainer;
