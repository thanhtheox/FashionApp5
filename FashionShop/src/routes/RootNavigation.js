import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackScreen } from './AuthNavigation';
import AppStackScreen from './AppNavigation';
import useAuth from '../hooks/useAuth';

const RootStack = createNativeStackNavigator();

const RootStackScreen = props => {
  const { auth } = useAuth();
  return (
      <RootStack.Navigator
      initialRouteName="AuthStackScreen"
      screenOptions={{headerShown: false}}>
        {!auth?.accessToken ? (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
        ):(
        <RootStack.Screen name="AppStackScreen" component={AppStackScreen} />
        )}
      </RootStack.Navigator>
  );
};

const RootNavigator = props => {

  return (
    <NavigationContainer>
      <RootStackScreen {...props} />      
    </NavigationContainer>
  );
};

export default RootNavigator;