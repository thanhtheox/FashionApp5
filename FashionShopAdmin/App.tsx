import { View, Text } from 'react-native'
import React from 'react'
import DashBoardScreen from './src/screens/dashBoardScreen'
import ListOfItemScreen from './src/screens/listOfItemScreen'
import ListOfColor_SizeScreen from './src/screens/listOfColor&SizeScreen'
import AddSizeScreen from './src/screens/addSizeScreen'
import AddColorScreen from './src/screens/addColorScreen'
import ListOfCategoryScreen from './src/screens/listOfCategoryScreen'
import AddTagScreen from './src/screens/addTag'
import ListOfTagScreen from './src/screens/listOfTagScreen'
import AddItemDetailScreen from './src/screens/addItemDetailScreen'
import ItemDetailScreen from './src/screens/itemDetailScreen'
import ListOfCollectionScreen from './src/screens/listOfCollectionScreen'
import CollectionItem from './src/screens/listOfCollectionScreen/components/collectionItem'
import ListOfBlogScreen from './src/screens/listOfBlogScreen'
import AddCollectionScreen from './src/screens/addCollectionScreen'
import MyNavigationContainer from './src/router/navigationContainer'
import UserItem from './src/screens/listOfUserScreen/component/userItem'
import ListOfUserScreen from './src/screens/listOfUserScreen'

const App = () => {
  return (
    <MyNavigationContainer/>
  )
}

export default App;