/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';
import Excited from './Excited.react';

function concat(a: string, b: string): string {
  return a + b;
}

export const App = ({ a, b }: { a: string, b: string }): React$Element<> =>
  <div styleName="app-style">
    {concat(a, b)}
  </div>;


export default CSSModules(App, styles);
