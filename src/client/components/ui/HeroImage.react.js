/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './HeroImage.scss';

type Props = {
  url: string,
  caption: string
};

const HeroImage = ({ url, caption }): React$Element<> => {
  return (
    <div styleName="hero-container">
      <div styleName="hero-image-container">
        <img styleName="hero-image" src={url} />
      </div>
      <div styleName="hero-caption-container">
        <span styleName="hero-caption">{caption}</span>
      </div>
    </div>
  );
};

export default CSSModules(HeroImage, styles);
