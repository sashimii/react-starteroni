/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SubscriptionInput.scss';

const SubscriptionInput = () => {
  return (
    <div styleName="input-container">
      <form>
        <input styleName="input-box" type="email" placeholder="Email" />
        <button styleName="input-button">Subscribe</button>
      </form>
    </div>
  );
};

export default CSSModules(SubscriptionInput, styles);
