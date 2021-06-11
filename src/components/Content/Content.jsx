import s from './Content.module.css'
import Profile from './Profile/Profile';

const Content = () => {
	return (
		<content className={s.content}>
			<div>
				<img src="https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg" alt="beach" />
			</div>
			<Profile />
		</content>
	);
};
export default Content;
