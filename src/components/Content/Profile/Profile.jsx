import MyPosts from './My posts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../../redux/State";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profilePage.posts}
               newPostText={props.profilePage.newPostText}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
export default Profile;
