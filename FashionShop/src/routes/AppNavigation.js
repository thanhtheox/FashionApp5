import React, {useEffect, useState} from 'react';
import color from '../constants/color';
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
import OTPScreen from '../screens/auth/otpScreen';
import { useSelector } from 'react-redux';
import { MyInfoStackScreen } from '../screens/app/userInfo/myInfoNavigation';

const AppStackWithVerify = createNativeStackNavigator();

const AppStackWithVerifyScreen = () => {
  return (
    <AppStackWithVerify.Navigator
      initialRouteName="HomeStackScreen"
      screenOptions={{
        headerShown: true,
        headerBackVisible: false,
      }}>
      <AppStackWithVerify.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStackWithVerify.Screen
        name="BlogStackScreen"
        component={BlogStackScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStackWithVerify.Screen
        name="CheckOutStackScreen"
        component={CheckOutStackScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStackWithVerify.Screen
        name="CategoryGridViewByIdScreen"
        component={CategoryGridViewByIdScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStackWithVerify.Screen
        name="CategoryGridViewAllScreen"
        component={CategoryGridViewAllScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStackWithVerify.Screen
        name="CartScreen"
        component={CartScreen}
        options={() => ({
          headerShown:false
        })}
      />
      <AppStackWithVerify.Screen
        name="MenuScreen"
        component={Menu}
        options={() => ({
          headerShown:false
        })}
      />
      <AppStackWithVerify.Screen
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
      <AppStackWithVerify.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStackWithVerify.Screen
        name="SearchDetailScreen"
        component={SearchDetailScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <Custom_Header navigation={navigation}/>
          ),
        })}
      />
      <AppStackWithVerify.Screen
        name="MyInfoStackScreen"
        component={MyInfoStackScreen}
        options={() => ({
          headerShown:false
        })}
      />
    </AppStackWithVerify.Navigator>
  );
};

const AppStack = createNativeStackNavigator();

const AppStackScreen = () => {
  const user = useSelector(state => state.user);
  const {userItems} = user;
  const userInfo = userItems.user;
  

  return (
    <AppStack.Navigator
      initialRouteName="AppStackWithVerifyScreen"
      screenOptions={{headerShown: false}}>
        {userInfo.emailVerified === true ? (
          <>
        <AppStack.Screen name="AppStackWithVerifyScreen" component={AppStackWithVerifyScreen} />
        </>
        ):( 
        <AppStack.Screen name="OTPScreen" component={OTPScreen} />
        )}
      </AppStack.Navigator>
  );
};

export default AppStackScreen;

