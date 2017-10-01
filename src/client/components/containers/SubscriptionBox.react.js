/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SubscriptionBox.scss';

import SubscriptionInput from '../ui/SubscriptionInput.react';

const SubscriptionBox = () => {
  return (
    <div styleName="subscription-box-container">
      <div styleName="subscription-box">
        <h4 styleName="subscription-box-text">Newsletter</h4>
        <div>
          <SubscriptionInput />
        </div>
      </div>
    </div>
  );
};

export default CSSModules(SubscriptionBox, styles);
