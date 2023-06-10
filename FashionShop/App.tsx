import React from 'react';
import RootNavigator from './src/routes/RootNavigation';
import {AuthProvider} from './src/context/AuthProvider';
import OrderSuccess from './src/screens/app/checkout/component/orderSuccess';

const App = (props: any) => {
  return (
    <AuthProvider>
      <RootNavigator {...props} />
    </AuthProvider>
    // <OrderSuccess />
  );
};

export default App;
