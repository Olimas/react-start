import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div className={s.profile}>
				<div className={s.profileImg}>
					<img src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png" alt="profile" />
				</div>
				<div className = {s.profileDescription}>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nam illo voluptatibus, molestias blanditiis facere harum, quos fuga eos odio unde? Cum, velit. Doloremque atque amet quidem sequi placeat. Deleniti!</p>
				</div>
			</div>
			<MyPosts />
		</div>
	);
};
export default Profile;
