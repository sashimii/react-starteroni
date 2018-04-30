/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';

import Dropdown from './ui/Dropdown.react';

export const App = ({ a, b }: { a: string, b: string }): React$Element<> => (
  <div styleName="app-style">
    <Dropdown
      options={[
        {
          value: 'toronto',
          text: 'Toronto'
        },
        {
          value: 'tokyo',
          text: 'Tokyo'
        },
        {
          value: 'london',
          text: 'London'
        },
        {
          value: 'sydney',
          text: 'Sydney'
        }
      ]}
      onSelectionChange={() => {}}
    />
  </div>
);

export default CSSModules(App, styles);
