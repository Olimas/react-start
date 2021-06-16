const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
    {id: 4, name: 'User 4'},
    {id: 5, name: 'User 5'},
    {id: 6, name: 'User 6'},
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Hi'},
    {id: 5, message: 'How are you?'},
    {id: 6, message: 'Yo'},
  ],
  newMessagesText: 'test'
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        message: state.newMessagesText,
      };
      state.messages.push(newMessage);
      state.newMessagesText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessagesText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  }
}
export const updateNewMessageTextActionCreator = (text) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;
