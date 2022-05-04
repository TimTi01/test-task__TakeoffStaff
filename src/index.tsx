import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { Routers } from './routers/Routers';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers/>
    </Provider>
  </React.StrictMode>
);