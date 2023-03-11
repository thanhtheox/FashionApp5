import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Custom_Footer from './src/components/footer/Custom_Footer';
import HomePageRight from './src/components/buttons/HomePageRight';
import HomePageLeft from './src/components/buttons/HomePageLeft';
import SubmitNone from './src/components/buttons/SubmitNone';
import SubmitRight from './src/components/buttons/SubmitRight';
import SubmitLeft from './src/components/buttons/SubmitLeft';
import Custom_HomepageProd from './src/components/products/CustomHomepageProd';
import Custom_GridViewProd from './src/components/products/CustomGridViewProd';
import AddToBasket from './src/components/buttons/AddToBasket';
import Submit from './src/components/buttons/Submit';
import CheckOut from './src/components/buttons/CheckOut';
import Custom_Tag2 from './src/components/tags/border';
import BackToHome from './src/components/buttons/BackToHome';
import HomeScreen from './src/screens/home/homeScreen';

import ContactInfor from './src/screens/home/myInfoScreen/component/contactInfor';
import SignInScreen from './src/screens/auth/signInScreen';
import SignUpScreen from './src/screens/auth/signUpScreen';
const App = (props: any) => {
  return (
    <HomeScreen  />
  );
};

export default App;
