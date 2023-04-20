import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlogGridViewScreen from './blogGridView/blogGridViewScreen';
import BlogPostScreen from './blogPost';

const BlogStack = createNativeStackNavigator();

export const BlogStackScreen = props => {
  return (
    <BlogStack.Navigator
      initialRouteName="BlogGridViewScreen"
      screenOptions={{headerShown: false}}>
      <BlogStack.Screen
        name="BlogGridViewScreen"
        component={BlogGridViewScreen}
        options={{headerShown: false}}
      />
      <BlogStack.Screen
        name="BlogPostScreen"
        component={BlogPostScreen}
        options={{headerShown: false}}
      />
    </BlogStack.Navigator>
  );
};
