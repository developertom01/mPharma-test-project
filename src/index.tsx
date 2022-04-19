import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Bootstrap from './Bootstrap';
import reportWebVitals from './reportWebVitals';
import { persister, store } from './store';
import "./res/styles/index.scss"
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} >
    <PersistGate persistor = {persister}>
      <Bootstrap/>
    </PersistGate>

  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
