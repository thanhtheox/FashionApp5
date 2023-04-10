import React from 'react';
import RootNavigator from './src/routes/RootNavigation';

const App = (props: any) => {
  return (
      <RootNavigator {...props}/>
  );
};

export default App;
