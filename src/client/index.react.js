/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './redux/reducers';
import App from './components/App.react';
import Excited from './components/Excited.react';

// import { Router, Route, IndexRoute, Link } from 'react-router';
import { BrowserRouter, HashRouter, Router, Route } from 'react-router-dom';

let store = createStore(appReducers);

// import config from './config';

const AppComponent = () => {
  return <App a="Hello! " b="World! " />;
};

const Whatever = () => {
  return <h1>Hello friendo</h1>;
};



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={AppComponent} />
        <Route path="/whatever" component={Whatever} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')); // eslint-disable-line
