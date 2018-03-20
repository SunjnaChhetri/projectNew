import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import allReducers from './Reducers';
import App from './Component/MainApp';
import { Router, BrowserRouter, Route, Switch, Redirect, browserHistory } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
const store = createStore(allReducers, applyMiddleware(thunk, promise(), createLogger()));

ReactDOM.render(
    <div>
          
        <Provider store={store}>
           
                <App/>
         
        </Provider>
     
    </div>,
    document.getElementById('app')
);
