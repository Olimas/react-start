import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => (<Post id={p.id} message={p.message} likesCount={p.likesCount}/>))
  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.posts}>
      <h2>My posts </h2>
      <div className={s.createPost}>
        <textarea onChange={onPostChange}
                  ref={newPostElement}
                  className={s.descriptionPost}
                  value={props.newPostText}/>
        <button onClick={addPost} className={s.addPost}>Add post</button>
        <button className={s.removePost}>Remove post</button>
      </div>
      {postsElements}
    </div>
  )
};

export default MyPosts;
