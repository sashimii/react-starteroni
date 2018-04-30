import { combineReducers } from 'redux';

import { selectedCity } from './cities';

const applicationState = combineReducers({
  selectedCity
});

export default applicationState;
