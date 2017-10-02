/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Button.scss';

type Props = {
  shape: string,
  text: string,
  icon: string,
  color: string
};

const Button = ({ shape, text, icon, color }): React$Element<> => {
  return (
    <div style={{ backgroundColor: color }} styleName={`button--${shape}`}>
      <div styleName="button-text">{text}</div>
    </div>
  );
};

export default CSSModules(Button, styles);
