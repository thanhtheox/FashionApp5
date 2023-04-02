import { View, Text } from 'react-native'
import React from 'react'
import DashBoardScreen from './src/screens/dashBoardScreen'
import ListOfItemScreen from './src/screens/listOfItemScreen'
import ListOfColor_SizeScreen from './src/screens/listOfColor&SizeScreen'
import AddSizeScreen from './src/screens/addSizeScreen'
import AddColorScreen from './src/screens/addColorScreen'
import ListOfCategoryScreen from './src/screens/listOfCategoryScreen'

const App = () => {
  return (
    <ListOfCategoryScreen/>
  )
}

export default App;