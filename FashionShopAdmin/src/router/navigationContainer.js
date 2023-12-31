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
import SignInScreen from '../screens/signInScreen';
import SplashScreen from '../screens/splashScreen';
import useAuth from '../hooks/useAuth';
import AddCategoryScreen from '../screens/addCategory';
import AddBlogScreen from '../screens/addBlogScreen';
import EditBlogScreen from '../screens/editBlogScreen';
import OrderDetailScreen from '../screens/orderDetailScreen';
import EditCategoryScreen from '../screens/editCategoryScreen';
import ListOfItemFromCategoryScreen from '../screens/listOfItemFromCategoryScreen';
import EditTagScreen from '../screens/editTagScreen';
import Statistics from '../screens/statisticScreen';


const Stack = createNativeStackNavigator();

const MyNavigationContainer= () => {
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = React.useState(true);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen isLoading={isLoading} setIsLoading={setIsLoading}/>;
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator 
        screenOptions={{headerShown: false}} >
        {!auth?.accessToken ? (
          // login
          <Stack.Screen name="SignIn" component={SignInScreen} />
        ) : (
          <>
        
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
          <Stack.Screen name="AddBlog" component={AddBlogScreen} />
          <Stack.Screen name="EditBlog" component={EditBlogScreen} />


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
          <Stack.Screen name="EditTag" component={EditTagScreen} />


  {/* Order */}
          <Stack.Screen name="ListOrder" component={ListOfOrderScreen} />
          <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />


{/*Category */}
          <Stack.Screen name="ListCategory" component={ListOfCategoryScreen} />
          <Stack.Screen name="AddCategory" component={AddCategoryScreen} />
          <Stack.Screen name="EditCategory" component={EditCategoryScreen} />
          <Stack.Screen name="ListItemFromCategory" component={ListOfItemFromCategoryScreen} />

{/* user */}
          <Stack.Screen name="ListUser" component={ListOfUserScreen} />
          <Stack.Screen name="EditUser" component={EditUserScreen} />

{/* statistic */}
          <Stack.Screen name="Statistics" component={Statistics} />
          </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MyNavigationContainer;

const styles = StyleSheet.create({})
