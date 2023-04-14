import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './homeScreen';
import ContactUsScreen from './contactUsScreen';
import OurStoryScreen from './ourStoryScreen';

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = props => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="OurStoryScreen"
        component={OurStoryScreen}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};
