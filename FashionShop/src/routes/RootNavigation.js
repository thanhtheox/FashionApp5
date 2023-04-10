import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackScreen } from './AuthNavigation';
import AppStackScreen from './AppNavigation';

const RootStack = createNativeStackNavigator();

const RootStackScreen = props => {
  return (
      <RootStack.Navigator
      initialRouteName="AuthStackScreen"
      screenOptions={{headerShown: false}}>
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
        <RootStack.Screen name="AppStackScreen" component={AppStackScreen} />
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