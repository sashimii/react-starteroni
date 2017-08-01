/* @flow */

import React from 'react';

const App = ({a, b} : {a: string, b: string}) =>
  <div>{ concat(a,b) }</div>;

export default App;


function concat(a: string, b: string): number {
  return (a+b).length;
}
