import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => (<Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount}/>))
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();

  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }

  return (
    <div className={s.posts}>
      <h2>My posts </h2>
      <div className={s.createPost}>
        <textarea onChange={onPostChange}
                  ref={newPostElement}
                  className={s.descriptionPost}
                  value={props.newPostText}/>
        <button onClick={onAddPost} className={s.addPost}>Add post</button>
        <button className={s.removePost}>Remove post</button>
      </div>
      {postsElements}
    </div>
  )
};

export default MyPosts;
