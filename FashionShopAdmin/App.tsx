import { View, Text } from 'react-native'
import React from 'react'
import MyNavigationContainer from './src/router/navigationContainer'
import { AuthProvider } from './src/context/AuthProvider'
import HeaderMin from './src/components/header/headerMin'
import HeaderMax from './src/components/header/headerMax'

const App = () => {
  return (
   <HeaderMax/>
  )
}

export default App;