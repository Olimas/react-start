import s from './Aside.module.css'
const Aside = () => {
	return (
		<aside className={s.aside}>
			<ul className={s.itemList}>
				<li className={`${s.item} ${s.active}`}>
					<a href="#">Profile</a>
				</li>
				<li className={s.item}>
					<a href="#">Messages</a>
				</li>
				<li className={s.item}>
					<a href="#">Main content</a>
				</li>
				<li className={s.item}>
					<a href="#">Music</a>
				</li>
				<li className={s.item}>
					<a href="#">Settings</a>
				</li>
			</ul>
		</aside>
	);
};
export default Aside;
