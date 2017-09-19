import { combineReducers } from 'redux';
import exclamation from './exclamation';
import products from './currentProductView';

const applicationState = combineReducers({
  exclamation,
  products
});

export default applicationState;
