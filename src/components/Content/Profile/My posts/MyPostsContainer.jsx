import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let postsElements = props.posts.map(p => (<Post id={p.id} message={p.message} likesCount={p.likesCount}/>))
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch(updateNewPostTextActionCreator(text));
  }
  return (
    <MyPosts />
  )
};

export default MyPostsContainer;
