/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Hamburger.scss';

const Hamburger = (): React$Element<> => {
  return (
    <div styleName="hamburger-container">
      <a href="#">
        <div styleName="hamburger-vertical-bar" />
        <div styleName="hamburger-vertical-bar" />
        <div styleName="hamburger-vertical-bar" />
      </a>
    </div>
  );
};

export default CSSModules(Hamburger, styles);
