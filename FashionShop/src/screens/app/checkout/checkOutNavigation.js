import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNewAddressScreen from './addNewAddress';
import CheckOut from './checkOutScreen';
import EditAddressScreen from './editAddress';

const CheckOutStack = createNativeStackNavigator();

export const CheckOutStackScreen = props => {
  return (
    <CheckOutStack.Navigator
      initialRouteName="CheckOutScreen"
      screenOptions={{headerShown: false}}>
      <CheckOutStack.Screen
        name="CheckOutScreen"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <CheckOutStack.Screen
        name="AddNewAddressScreen"
        component={AddNewAddressScreen}
        options={{headerShown: false}}
      />
      <CheckOutStack.Screen
        name="EditAddressScreen"
        component={EditAddressScreen}
        options={{headerShown: false}}
      />
    </CheckOutStack.Navigator>
  );
};
