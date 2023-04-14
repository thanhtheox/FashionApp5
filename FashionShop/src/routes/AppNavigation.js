import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import scale from '../constants/responsive';
import color from '../constants/color';
import FONT_FAMILY from '../constants/fonts';
import { useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Custom_Header from '../components/header/Custom_Header';

import BlogPostScreen from '../screens/app/blog/blogPost';
import CartScreen from '../screens/app/cart';
import { CollectionStackScreen } from '../screens/app/collection/collectionNavigation';
import HomeScreen from '../screens/app/home/homeScreen';
import Menu from '../screens/app/menu';
import ProductDetailsScreen from '../screens/app/product/productDetailsScreen';
import SearchDetailScreen from '../screens/app/search/searchDetailScreen/searchDetailScreen';
import MyInfoScreen from '../screens/app/userInfo/myInfoScreen';

const AppStack = createNativeStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,
        headerBackVisible: false,
      }}>
      <AppStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="BlogPostScreen"
        component={BlogPostScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="MenuScreen"
        component={Menu}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="CollectionStackScreen"
        component={CollectionStackScreen}
        options={({navigation}) => ({
          headerStyle: {
            backgroundColor:color.TitleActive,
          },
          headerTitle: () => (
            <Custom_Header logoColor={color.OffWhite} menuColor={color.OffWhite} 
            searchColor={color.OffWhite} cartColor={color.OffWhite} navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="SearchDetailScreen"
        component={SearchDetailScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="MyInfoScreen"
        component={MyInfoScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;

