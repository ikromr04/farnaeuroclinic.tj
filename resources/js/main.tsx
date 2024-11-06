import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import './main.css';
import { Provider } from 'react-redux';
import { store } from './store';
import dayjs from 'dayjs';
import { checkAuthAction } from './store/auth-slice/auth-api-actions';

store.dispatch(checkAuthAction());
dayjs.locale('ru');

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
