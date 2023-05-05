import axiosClient from './axiosClient';

const foodApi = {
  getAll(page = '', categoryId = '', search = '') {
    const url = `/food?page=${page || ''}&category=${categoryId || ''}&search=${
      search || ''
    }`;
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/food/${id}`;
    return axiosClient.get(url);
  },

  getPopular() {
    const url = '/food/popular';
    return axiosClient.get(url);
  },

  getBestDeals() {
    const url = '/food/best-deals';
    return axiosClient.get(url);
  },
};

export default foodApi;
