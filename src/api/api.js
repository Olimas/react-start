import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "6d7a278c-5198-41df-978e-6c63ff547fa1",
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },

}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
}