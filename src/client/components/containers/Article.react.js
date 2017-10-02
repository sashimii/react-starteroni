/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Article.scss';

import Paragraph from '../ui/Paragraph.react';

type Props = {
  children: Array<React$Element<>>
};

const Article = ({ children }: Props): React$Element<> => {
  return <article styleName="article">{children}</article>;
};

export default CSSModules(Article, styles);
