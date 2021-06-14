import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import state, {subscribe, addMessage, addPost, updateNewMessagesText, updateNewPostText} from "./redux/State";
import App from './App';

let rerenderEntireThree = (state) => {
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

rerenderEntireThree(state);

subscribe(rerenderEntireThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
