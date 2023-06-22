import React from 'react';
import RootNavigator from './src/routes/RootNavigation';
import {AuthProvider} from './src/context/AuthProvider';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const App = (props: any) => {
  return (
    <AuthProvider>
      <RootNavigator {...props} />
    </AuthProvider>
  );
};

export default App;
