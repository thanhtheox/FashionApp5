import axiosClient from './axiosClient';

const collectionApi = {
  // getAll(page = '', search = '') {
  //   const url = `/category?page=${page || ''}&search=${search || ''}`;
  //   return axiosClient.get(url);
  // },
  getAll() {
    const url = `/get-all-collection`;
    return axiosClient.get(url);
  },

  getRandom() {
    const url = '/get-random-collection';
    return axiosClient.get(url);
  },

  get(_id) {
    const url = `/get-collection-by-id/${_id}`;
    return axiosClient.get(url);
  },
};

export default collectionApi;
