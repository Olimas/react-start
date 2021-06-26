import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/Preloader";
import userPhoto from '../../../../assets/images/user.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={s.profile}>
      <div className={s.profileContainer}>
        <div className={s.profileLogo}>
          <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt="user not added image"/>
          <div className={s.profileContacts}>
            <h3>Contacts:</h3>
            <h4>Facebook: <span>{props.profile.facebook ? props.profile.facebook : "not added"}</span></h4>
            <h4>Website: <span>{props.profile.contacts.website ? props.profile.contacts.website : "not added"}</span>
            </h4>
            <h4>Vk: <span>{props.profile.contacts.vk ? props.profile.contacts.vk : "not added"}</span></h4>
            <h4>Twitter: <span>{props.profile.contacts.twitter ? props.profile.contacts.twitter : "not added"}</span>
            </h4>
            <h4>Instagram: <span>{props.profile.contacts.instagram ? props.profile.contacts.instagram : "not added"}</span>
            </h4>
            <h4>YouTube: <span>{props.profile.contacts.youtube ? props.profile.contacts.youtube : "not added"}</span>
            </h4>
            <h4>Github: <span>{props.profile.contacts.github ? props.profile.contacts.github : "not added"}</span></h4>
            <h4>MainLink: <span>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : "not added"}</span>
            </h4>
          </div>
        </div>
        <div className={s.profileDescription}>
          <h2>Profile description</h2>

          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

          <h3>AboutMe: <span>{props.profile.aboutMe ? props.profile.aboutMe : "not added"}</span></h3>

          <h3>LookingForAJob: <span>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "not added"}</span>
          </h3>
          <h3>FullName: <span>{props.profile.fullName ? props.profile.fullName : "not added"}</span></h3>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
