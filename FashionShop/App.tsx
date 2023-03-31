import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/app/home/homeScreen';
import ProductDetailsScreen from './src/screens/app/product/productDetailsScreen';
import OnboardingScreen from './src/screens/auth/onboarding';
import MyInfoScreen from './src/screens/app/userInfo/myInfoScreen';
import SignInScreen from './src/screens/auth/signInScreen';
import Menu from './src/screens/app/menu';

const App = (props: any) => {
  return (
      <HomeScreen/>
  );
};

export default App;
