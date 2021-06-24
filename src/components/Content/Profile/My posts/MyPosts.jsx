import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => (<Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount}/>))
  let onAddNewPost = (values) => {
    props.addPost(values.newPostText);
  }
  return (
    <div className={s.posts}>
      <h2>My posts </h2>
      <div className={s.createPost}>
        <AddNewPostFormRedux onSubmit={onAddNewPost}/>
      </div>
      {postsElements}
    </div>
  )
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field className={s.descriptionPost}
               value={props.newPostText}
               placeholder="Enter your post text"
               name={"newPostText"}
               component={"textarea"}

        />
      </div>
      <div>
        <button className={s.addPost}>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: 'postAddForm'
})(AddNewPostForm)

export default MyPosts;
