/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Tag.scss';

type Props = {
  children: string
};

const Tag = ({ children }: Props): React$Element<> => {
  return (
    <div styleName="tag-container">
      <span styleName="tag-text">{children}</span>
    </div>
  );
};

export default CSSModules(Tag, styles);
