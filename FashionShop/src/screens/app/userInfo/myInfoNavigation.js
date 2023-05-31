import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyInfoScreen from './myInfoScreen';
import EditMyInfoScreen from './editMyInfoScreen';

const MyInfoStack = createNativeStackNavigator();

export const MyInfoStackScreen = props => {
  return (
    <MyInfoStack.Navigator
      initialRouteName="MyInfoScreen"
      screenOptions={{headerShown: false}}>
      <MyInfoStack.Screen
        name="MyInfoScreen"
        component={MyInfoScreen}
        options={{headerShown: false}}
      />
      <MyInfoStack.Screen
        name="EditMyInfoScreen"
        component={EditMyInfoScreen}
        options={{headerShown: false}}
      />
    </MyInfoStack.Navigator>
  );
};
