import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import scale from '../constants/responsive';
import color from '../constants/color';
import FONT_FAMILY from '../constants/fonts';
import { useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Custom_Header from '../components/header/Custom_Header';

import { BlogStackScreen } from '../screens/app/blog/blogNavigation';
import { CheckOutStackScreen } from '../screens/app/checkout/checkOutNavigation';
import CartScreen from '../screens/app/cart';
import { CollectionStackScreen } from '../screens/app/collection/collectionNavigation';
import { HomeStackScreen } from '../screens/app/home/HomeNavigation';
import Menu from '../screens/app/menu';
import CategoryGridViewAllScreen from '../screens/app/product/categoryGridView/CategoryGridViewAllScreen';
import CategoryGridViewByIdScreen from '../screens/app/product/categoryGridView/CategoryGridViewByIdScreen';
import ProductDetailsScreen from '../screens/app/product/productDetailsScreen';
import SearchDetailScreen from '../screens/app/search/searchDetailScreen/searchDetailScreen';
import MyInfoScreen from '../screens/app/userInfo/myInfoScreen';

const AppStack = createNativeStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={{
        headerShown: true,
        headerBackVisible: false,
      }}>
      <AppStack.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="BlogStackScreen"
        component={BlogStackScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="CheckOutStackScreen"
        component={CheckOutStackScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="CategoryGridViewByIdScreen"
        component={CategoryGridViewByIdScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="CategoryGridViewAllScreen"
        component={CategoryGridViewAllScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={() => ({
          headerShown:false
        })}
      />
      <AppStack.Screen
        name="MenuScreen"
        component={Menu}
        options={() => ({
          headerShown:false
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
        options={() => ({
          headerShown:false
        })}
      />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;

