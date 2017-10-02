/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Paragraph.scss';

type Props = {
  children: string
};

const Paragraph = ({ children }: Props): React$Element<> => {
  return <p styleName="paragraph">{children}</p>;
};

export default CSSModules(Paragraph, styles);
