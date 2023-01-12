import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './Store/store';
import './index.css';
import { ThemeProvider } from '@emotion/react';
import {theme} from './constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
