import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../../storeContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        }
        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        }
        return <MyPosts addPost={onAddPost}
                        updateNewPostText={onPostChange}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
        />
      }
      }
    </StoreContext.Consumer>
  )
};

export default MyPostsContainer;
