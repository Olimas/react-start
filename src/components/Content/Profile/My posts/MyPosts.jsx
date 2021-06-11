import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
	return (
		<div className={s.posts}>
			<h2>My posts </h2>
			<div className={s.createPost}>
				<textarea className={s.descriptionPost}></textarea>
				<button className={s.addPost}>Add post</button>
				<button className={s.removePost}>Remove post</button>
			</div>
			<Post message="Hi, how are you?" likesCounter="12" />
			<Post message="Its my first post" likesCounter="22" />
		</div>
	);
};
export default MyPosts;
