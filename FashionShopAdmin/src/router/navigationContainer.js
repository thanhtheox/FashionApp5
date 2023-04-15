import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoardScreen from '../screens/dashBoardScreen';
import ListOfItemScreen from '../screens/listOfItemScreen';
import ListOfBlogScreen from '../screens/listOfBlogScreen';
import ListOfCollectionScreen from '../screens/listOfCollectionScreen';
import ListOfColor_SizeScreen from '../screens/listOfColor&SizeScreen';
import ListOfTagScreen from '../screens/listOfTagScreen';
import AddCollectionScreen from '../screens/addCollectionScreen';
import AddColorScreen from '../screens/addColorScreen';
import AddItemDetailScreen from '../screens/addItemDetailScreen';
import AddItemScreen from '../screens/addItemScreen';
import AddSizeScreen from '../screens/addSizeScreen';
import AddTagScreen from '../screens/addTag';
import ItemDetailScreen from '../screens/itemDetailScreen';
import ListOfOrderScreen from '../screens/listOfOrderScreen';
import ListOfCategoryScreen from '../screens/listOfCategoryScreen';
import ListOfUserScreen from '../screens/listOfUserScreen';
import EditUserScreen from '../screens/editUserScreen';
import EditItemDetailScreen from '../screens/editItemDetailScreen';
import EditItemScreen from '../screens/editItemScreen';
import EditCollectionScreen from '../screens/editCollectionScreen';
import SignUpScreen from '../screens/signUpScreen';


const Stack = createNativeStackNavigator();



const MyNavigationContainer= () => {
  return (
    <NavigationContainer independent={true}>
       <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName='Login' >

{/* login */}
         <Stack.Screen name="Login" component={SignUpScreen} />


{/* dashboard */}
         <Stack.Screen name="DashBoard" component={DashBoardScreen} />

{/* product  */}
         <Stack.Screen name="ListItem" component={ListOfItemScreen}/>

         <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
         <Stack.Screen name="AddItem" component={AddItemScreen} />
         <Stack.Screen name="AddDetailItem" component={AddItemDetailScreen} />

         <Stack.Screen name="EditItem" component={EditItemScreen} />
         <Stack.Screen name="EditDetailItem" component={EditItemDetailScreen} />





{/* Blog  */}
         <Stack.Screen name="ListBlog" component={ListOfBlogScreen} />

{/*  collection */}
         <Stack.Screen name="AddCollection" component={AddCollectionScreen} />
         <Stack.Screen name="ListCollection" component={ListOfCollectionScreen} />
         <Stack.Screen name="EditCollection" component={EditCollectionScreen} />


{/* Color & size */}
         <Stack.Screen name="ListColorAndSize" component={ListOfColor_SizeScreen} />
         <Stack.Screen name="AddColor" component={AddColorScreen} />
         <Stack.Screen name="AddSize" component={AddSizeScreen} />

{/* Tag  */}
         <Stack.Screen name="ListTag" component={ListOfTagScreen} />
         <Stack.Screen name="AddTag" component={AddTagScreen} />


{/* Order no screen*/}
          <Stack.Screen name="ListOrder" component={ListOfOrderScreen} />


{/*Category */}
          <Stack.Screen name="ListCategory" component={ListOfCategoryScreen} />

{/* user */}
          <Stack.Screen name="ListUser" component={ListOfUserScreen} />
          <Stack.Screen name="EditUser" component={EditUserScreen} />

         
       </Stack.Navigator>
     </NavigationContainer>
  )
}

export default MyNavigationContainer;

const styles = StyleSheet.create({})
