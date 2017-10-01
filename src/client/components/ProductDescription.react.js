/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import ContainerBox from './ui/ContainerBox.react';
// import { Link } from 'react-router-dom';

// import { addExclamationMark } from '../redux/actions';

export const ProductDescription = ({
  dispatch,
  products
}: {
  dispatch: Function,
  products: Object
}): React$Element<> => {
  return (
    <div>
      <ContainerBox bgURL="https://s3.amazonaws.com/joefresh-resource-prod-new/ContentMedia/2017_P9/WK36-NewHP/promotile-newarrivals/wk36_promotile_womensnewarrivals" />
    </div>
  );
};

// const Images = ({ image }) => {
//
// }

export const mapStateToProps = (state: {
  products: Object
}): { products: Object } => {
  return { products: state.products };
};

export default connect(mapStateToProps)(ProductDescription);
