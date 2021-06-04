import React from 'react';
import moment from 'moment-timezone';
import { Provider } from 'react-redux';

import AppContent from './AppContent';
import store from './store';

moment.locale('pt-BR');

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
