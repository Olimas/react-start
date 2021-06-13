import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.postImg}>
        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png" alt="profile"/>
        <span>Likes: {props.likesCount}</span>
      </div>
      <div className={s.postDescription}>
        <h3 className={s.postTitle}>{props.message}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro molestiae nesciunt temporibus maxime tenetur,
          et vero quae est voluptate distinctio ad, deleniti dolor voluptatum? Iusto ipsam fugit doloribus officia esse.
        </p>
      </div>
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
