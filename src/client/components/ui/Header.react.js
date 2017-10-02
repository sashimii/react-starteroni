/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

type Props = {
  heading: string,
  subheading: string
};

const Header = ({ heading, subheading }: Props): React$Element<> => {
  return (
    <header styleName="header">
      <h1 styleName="header-heading">{heading}</h1>
      <span styleName="header-subheading">{subheading}</span>
    </header>
  );
};

export default CSSModules(Header, styles);
