/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appState from './redux/reducers';
import App from './components/App.react';
import ProductDescription from './components/ProductDescription.react';

import axios from 'axios';

import { updateCurrentProductView, fetchWoeid } from './redux/actions';

// import { Router, Route, IndexRoute, Link } from 'react-router';
import {
  BrowserRouter,
  HashRouter,
  Router,
  Route,
  Link
} from 'react-router-dom';

let store = createStore(appState);
const { dispatch } = store;

// import config from './config';

const AppRouter = () => {};

const toronto = {
  value: 'toronto',
  text: 'Toronto'
};
fetchWoeid(toronto)(dispatch);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
); // eslint-disable-line
