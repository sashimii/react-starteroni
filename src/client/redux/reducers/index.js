import { combineReducers } from 'redux';

import { selectedCity } from './cities';
import { mapData } from './poll';

const applicationState = combineReducers({
  selectedCity,
  mapData
});

export default applicationState;
