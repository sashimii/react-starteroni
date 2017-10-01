/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContainerBox.scss';

const ContainerBox = ({ bgURL }) => {
  // console.log(media().screen.and('max', 35.625));

  return (
    <div>
      <div styleName="hero-container">
        <div styleName="hero-content">
          <span className="hello">Hello World</span>
        </div>
      </div>
      <Styles className={styles['hero-content']} bgURL={bgURL} />
    </div>
  );
};

const Styles = ({ className, bgURL }) => {
  const mediaQueries = [
    'screen and (min-width: 35.625em)',
    'screen and (min-width: 64.625em)'
  ];
  const background = index => {
    return `.${className} {
      background-image: url('${bgURL}_b${3 - index}.jpg'), url('${bgURL}_b${3 -
      index}.png'), url('${bgURL}_b${3 - index}.gif');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }`;
  };

  const bgStyles = mediaQueries.map((query, index) => {
    return `
      @media ${query} {
        ${background(index + 1)}
      }
    `;
  });
  return (
    <style>
      {background(0)}
      {bgStyles.join('')}
    </style>
  );
};

const mediaQuery = () => {};
// screen and (min-width:35.625em) { .class-name {  } }

const media = (min = false, numLimitMin?: number) => {};

export default CSSModules(ContainerBox, styles);
