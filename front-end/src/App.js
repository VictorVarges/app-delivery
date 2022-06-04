import React from 'react';
import Routs from './router/Routs';
import Provider from './context/deliveryProvider';

function App() {
  return (
    <Provider>
      <Routs />
    </Provider>
  );
}

export default App;
