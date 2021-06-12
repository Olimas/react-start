import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => (<Post id={p.id} message={p.message} likesCount={p.likesCount}/>))

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value
  }

  return (
    <div className={s.posts}>
      <h2>My posts </h2>
      <div className={s.createPost}>
        <textarea ref={newPostElement} className={s.descriptionPost}></textarea>
        <button onClick={addPost} className={s.addPost}>Add post</button>
        <button className={s.removePost}>Remove post</button>
      </div>
      {postsElements}
    </div>
  )
};

export default MyPosts;
