import axiosAdmin from "./axiosConfig";

export async function refreshToken() {
    const {accessToken} = await authApi.refreshToken();
    return accessToken;
}

const authApi = {
    refreshToken(refreshToken) {
        const url = 'refresh';
        return axiosClient.post(url);
    },
    login(data) {
        const url = '/login';
        return axiosClient.post(url, data);
    },
}