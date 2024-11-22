import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import configStore from './redux/store';
import {persistor} from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={configStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();