/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { addExclamationMark } from '../redux/actions';

export const ProductDescription = ({
  dispatch,
  products
}: {
  dispatch: Function,
  products: Object
}): React$Element<> => {
  if (products.productData) {
    const { name, color, images } = products.productData[0];

    return (
      <div>
        <h1>
          {name}
        </h1>
        <h2>
          {color}
        </h2>
        <div>
          {images.map((image, index) => {
            return <img key={'product-image-' + index} src={image.medium} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading!</div>;
  }
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
