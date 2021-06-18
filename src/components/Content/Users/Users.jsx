import s from './Users.module.css'
import React from "react";
import * as axios from "axios";
import userPhoto from '../../../assets/images/user.png'

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
          props.setUsers(responce.data.items)
        }
      )
    }
  }


  return (
    <div className={s.users}>
      <button className={s.getUsers} onClick={getUsers}>GetUsers</button>
      {
        props.users.map(u =>
          <div className={s.user} key={u.id}>
            <span>
              <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
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
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        )
      }
    </div>
  )
}

export default Users;
