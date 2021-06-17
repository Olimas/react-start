import s from './Users.module.css'
import React from "react";

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
        {
          id: 1,
          photoUrl: 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png',
          followed: false,
          fullName: 'Dmitriy',
          status: 'I am a boss',
          location: {city: 'Minsk', country: 'Belarus'}
        },
        {
          id: 2,
          photoUrl: 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png',
          followed: true,
          fullName: 'Domenic',
          status: 'I am a big-boss',
          location: {city: 'Moscow', country: 'Russia'}
        },
        {
          id: 3,
          photoUrl: 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-PNG-Icon.png',
          followed: false,
          fullName: 'Andrew',
          status: 'I am a not a boss',
          location: {city: 'Kyiv', country: 'Ukraine'}
        },
      ],
    )
  }

  return (
    <div className={s.users}>
      {
        props.users.map(u =>
          <div className={s.user} key={u.id}>
            <span>
              <img src={u.photoUrl}/>
            </span>
            <span>
              {u.followed
                ? <button onClick={() => {
                  props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  props.follow(u.id)
                }}>Follow</button>}
            </span>
            <span>
              <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </span>
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Users;
