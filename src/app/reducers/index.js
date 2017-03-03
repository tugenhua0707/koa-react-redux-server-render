import { combineReducers } from 'redux';

import { latestBills } from './latestbills';
import { detailedBill } from './detailedbill';

export default combineReducers({
  latestBills,
  detailedBill
});