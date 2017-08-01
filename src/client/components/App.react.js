/* @flow */

import React from 'react';
import './App.scss';

function concat(a: string, b: string): string {
  return (a + b);
}

const App = ({ a, b }: {a: string, b: string}): React$Element<> =>
  <div className="app-style">{ concat(a, b) }</div>;

export default App;
