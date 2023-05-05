import axiosClient from './axiosClient';

const userApi = {
  login(data) {
    const url = '/auth/login';
    return axiosClient.post(url, data);
  },

  signup(data) {
    const url = '/auth/signup';
    return axiosClient.post(url, data);
  },

  logout(id) {
    const url = `/auth/logout/${id}`;
    return axiosClient.post(url);
  },

  get(id) {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },

  refreshToken(refreshToken) {
    const url = '/auth/refresh';
    return axiosClient.post(url, {refreshToken});
  },

  reservate(payload) {
    const url = '/reservation/';
    return axiosClient.post(url, payload);
  },

  editUser(id, payload) {
    const url = `/auth/user/${id}`;
    return axiosClient.put(url, payload);
  },

  paying(id, payload) {
    const url = `/user/${id}/pay`;
    return axiosClient.post(url, payload);
  },

  getOrders(id) {
    const url = `/order/${id}`;
    return axiosClient.get(url);
  }
};

export default userApi;
