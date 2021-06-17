import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../storeContext";

const DialogsContainer = () => {
  return <StoreContext.Consumer>
    {(store) => {
      let state = store.getState().dialogsPage;
      let onAddMessage = () => {
        store.dispatch(addMessageActionCreator());
      }
      let onMessageChange = (text) => {
        store.dispatch(updateNewMessageTextActionCreator(text));
      }
      return <Dialogs addMessage={onAddMessage}
                      updateNewMessageText={onMessageChange}
                      dialogsPage={state}
      />
    }
    }
  </StoreContext.Consumer>
}

export default DialogsContainer;
