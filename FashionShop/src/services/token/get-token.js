import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getAccessToken() {
  const accessToken = await AsyncStorage.getItem('@access-token');
  return accessToken;
}
