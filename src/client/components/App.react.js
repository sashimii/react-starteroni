/* @flow */

import React from 'react';
import './App.scss';

const App = ({a, b} : {a: string, b: string}) =>
  <div className="app-style">{ concat(a,b) }</div>;

export default App;


function concat(a: string, b: string): number {
  return (a+b).length;
}
