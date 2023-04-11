import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CollectionDetailScreen from './collectionDetailScreen';
import CollectionScreen from './collectionScreen';

const CollectionStack = createNativeStackNavigator();

export const CollectionStackScreen = props => {
  return (
    <CollectionStack.Navigator
      initialRouteName="CollectionScreen"
      screenOptions={{headerShown: false}}>
      <CollectionStack.Screen
        name="CollectionScreen"
        component={CollectionScreen}
        options={{headerShown: false}}
      />
      <CollectionStack.Screen
        name="CollectionDetailScreen"
        component={CollectionDetailScreen}
        options={{headerShown: false}}
      />
    </CollectionStack.Navigator>
  );
};
