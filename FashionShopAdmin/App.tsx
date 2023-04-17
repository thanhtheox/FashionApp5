import { View, Text } from 'react-native'
import React from 'react'
import MyNavigationContainer from './src/router/navigationContainer'
import { AuthProvider } from './src/context/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <MyNavigationContainer/>
    </AuthProvider>
  )
}

export default App;