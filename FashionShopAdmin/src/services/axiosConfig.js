import { refreshToken } from "./authAPI";
import { getAccessToken } from "./getToken";

const { default: axios } = require("axios");
const { BASE_URL } = require("../utils/api");

const axiosAdmin = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

// Interceptors
axiosAdmin.interceptors.request.use(
    async function (config) {
        const token = await getAccessToken();
        if ( token ) {
            config.headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }
        return config;
    }, 
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosAdmin.interceptors.response.use(
    function (response) {
        return response.data;
    }, 
    async function (error) {
        const originalConfig = err.config;

        if ((err.response.status === 401 || err.response.status === 403) && !originalConfig._retry) {
            originalConfig._retry = true;

            try {
                const accessToken = await refreshToken();
                await AsyncStorage.setItem('@access-token', accessToken);
                axios.defaults.headers.common = {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                };

                return axiosAdmin(originalConfig);
            }
            catch (err) {
                return Promise.reject(error.response.data);
            }
        }
        return Promise.reject(error.response.data);
    }
);

export default axiosAdmin;