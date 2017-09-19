/* @flow */

import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addExclamationMark } from '../redux/actions';

export const ExcitedComponent = ({
  dispatch,
  exclamation
}: {
  dispatch: Function,
  exclamation: string
}): React$Element<> => {
  return (
    <div>
      <h1>{`LOL${exclamation}`}</h1>
      <button
        onClick={e => {
          dispatch(addExclamationMark(1));
        }}
      >
        Get Excited!
      </button>
      <Link to="/whatever">Go Here</Link>
    </div>
  );
};

export const mapStateToProps = (state: {
  exclamation: string
}): { exclamation: string } => {
  return { exclamation: state.exclamation };
};

export default connect(mapStateToProps)(ExcitedComponent);
