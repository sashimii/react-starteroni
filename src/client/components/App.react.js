/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';

import { connect } from 'react-redux';

import Dropdown from './ui/Dropdown.react';
import LeafletMap from './ui/LeafletMap.react';

export const App = ({ geoJSON }): React$Element<> => (
  <div styleName="app-style">
    {geoJSON !== null && <LeafletMap geoJSON={geoJSON} />}
  </div>
);

const mapStateToProps = ({ mapData }) => {
  return {
    geoJSON: mapData
  };
};

export default connect(mapStateToProps)(CSSModules(App, styles));
