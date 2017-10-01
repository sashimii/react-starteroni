/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Advert.scss';

const Advert = ({}) => {
  return (
    <div styleName="advert-unit-container">
      <span styleName="advert-designation-text">Ad</span>
      <div styleName="advert-container" />
    </div>
  );
};

export default CSSModules(Advert, styles);
