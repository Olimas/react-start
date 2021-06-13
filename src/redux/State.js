import {rerenderEntireThree} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'Its my first post', likesCount: 22},
      {id: 3, message: 'Hello', likesCount: 25},
    ],
    newPostText: 'newPostText'
  },
  dialogsPage: {
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
  }
}

export let addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireThree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireThree(state);
}

export default state;
