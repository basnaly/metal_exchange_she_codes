import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppTrade from './AppTrade';
import thunk from 'redux-thunk';
import { Provider} from "react-redux";
import { createLogger } from "redux-logger";
import { applyMiddleware, createStore, compose } from "redux";
import AllReducers from './Reducers/AllReducers';

const logger = createLogger({
});

const store = createStore (
  AllReducers, 
  compose(
      applyMiddleware(logger, thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AppTrade />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
