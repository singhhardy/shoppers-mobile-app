import React, { useState } from 'react';
import { Provider } from 'react-redux'
import { PaperProvider } from 'react-native-paper';
import customTheme from './theme';
import store from './src/redux/store'
import MainNavigator from './src/core/navigation/MainNavigator'

export default function App() {
  return (
    <Provider store={store}>
        <PaperProvider theme={customTheme}>
          <MainNavigator />
      </PaperProvider>
    </Provider>
  );
}
