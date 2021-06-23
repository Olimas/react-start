import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import React from "react";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
};
export default Profile;
