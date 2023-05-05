import AsyncStorage from '@react-native-async-storage/async-storage';
import userApi from './../userApi';

export async function refreshToken() {
  const refreshToken = await AsyncStorage.getItem('@refresh-token');
  const {accessToken} = await userApi.refreshToken(refreshToken);
  return accessToken;
}
