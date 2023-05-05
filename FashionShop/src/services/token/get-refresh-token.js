import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getRefreshToken() {
  const refreshToken = await AsyncStorage.getItem('@refresh-token');
  return refreshToken;
}
