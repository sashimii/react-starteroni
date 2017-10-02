/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Logo.scss';

type Props = {
  wordmark: string
};

const Logo = ({ wordmark }: Props): React$Element<> => {
  return (
    <div styleName="logo-container">
      <span styleName="logo-wordmark">{wordmark}</span>
    </div>
  );
};

export default CSSModules(Logo, styles);
