import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/Preloader";
import userPhoto from '../../../../assets/images/user.png'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, contacts}) => {
  if (!profile) {
    return <Preloader/>
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div className={s.profile}>
      <div className={s.profileContainer}>
        <div className={s.profileLogo}>
          <img src={profile.photos.large || userPhoto} alt="user not added image"/>
          <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
          <div className={s.profileContacts}>
            <div><h3>Contacts:</h3>{Object.keys(profile.contacts).map(key => {
              return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key] || "not added"}/>
            })}</div>
          </div>
        </div>
        <div className={s.profileDescription}>
          <b>Status: <ProfileStatusWithHooks status={status} updateStatus={updateStatus}
                                             className={s.profileStatus}/></b>
          <ProfileData profile={profile}/>
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({profile}) => {
  return <div>
    <div className={s.fullName}><h3>FullName: <span>{profile.fullName || "not added"}</span></h3></div>

    <h2>Profile description</h2>
    <div><h3>AboutMe: <span>{profile.aboutMe || "not added"}</span></h3></div>
    <div><b>LookingForAJob: <span>{profile.lookingForAJob ? "yes" : "no"}</span></b></div>
    {profile.lookingForAJob &&
    <div><b>My professional skills: <span>{profile.lookingForAJobDescription || "not added"}</span></b></div>
    }
  </div>
}

const Contacts = ({contactTitle, contactValue}) => {
  return <div className={s.contacts}><b>{contactTitle}: </b>{contactValue}</div>
}

export default ProfileInfo;
