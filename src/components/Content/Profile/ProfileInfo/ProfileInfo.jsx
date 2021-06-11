import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={s.profile}>
      <div className={s.profileImg}>
        <img src="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg" alt="image-beach"/>
      </div>
      <div className={s.profileLogo}>
        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png" alt="profile"/>
      </div>
      <div className={s.profileDescription}>
        <h2>Profile description</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam illo voluptatibus,
          molestias blanditiis facere harum, quos fuga eos odio unde? Cum, velit. Doloremque atque amet
          quidem sequi placeat. Deleniti!</p>
      </div>
    </div>
  );
};
export default ProfileInfo;
