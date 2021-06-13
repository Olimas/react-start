import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, updateNewMessagesText, updateNewPostText} from './redux/State'

export let rerenderEntireThree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostText}
           addMessage={addMessage}
           updateNewMessagesText={updateNewMessagesText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
