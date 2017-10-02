/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialMediaButtons.scss';

const SocialMediaButtons = ({ children }) => {
  return (
    <div styleName="social-media-links-container">
      <div styleName="social-media-links-buttons">{children}</div>
    </div>
  );
};

export default CSSModules(SocialMediaButtons, styles);
