/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';

import Hamburger from '../ui/Hamburger.react';
import Logo from '../ui/Logo.react';

import styles from './NavigationBar.scss';

const NavigationBar = ({}) => {
  return (
    <div styleName="navbar-container">
      <div styleName="navbar-container--padded">
        <div styleName="navbar-logo">
          <Logo wordmark="SIXURB" />
        </div>
        <div styleName="navbar-hamburger">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default CSSModules(NavigationBar, styles);
