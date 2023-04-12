import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/auth/onboarding';
import SignUpScreen from '../screens/auth/signUpScreen';
import SignInScreen from '../screens/auth/signInScreen';
import OTPScreen from '../screens/auth/otpScreen';

const AuthStack = createNativeStackNavigator();

export const AuthStackScreen = props => {
  return (
    <AuthStack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
