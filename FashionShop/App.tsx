import React from 'react';
import RootNavigator from './src/routes/RootNavigation';
import { AuthProvider } from './src/context/AuthProvider';

const App = (props: any) => {
  return (
    <AuthProvider>
      <RootNavigator {...props}/>
    </AuthProvider>
  );
};

export default App;
