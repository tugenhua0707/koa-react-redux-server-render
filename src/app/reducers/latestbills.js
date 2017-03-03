import {
  LATESTBILLS_SUCCESS,
  LATESTBILLS_FAIL
} from '../actions';

const initialState = {
  index: {
    data: null,
    error: null
  }
}
export function detailedBill(state = initialState, action) {
  switch (action.type) {
    case LATESTBILLS_SUCCESS:
      return {
        ... state,
        index: {
          ... state.index,
          data: action.data
        }
      }
    case LATESTBILLS_FAIL:
      return {
        ... state,
        index: {
          ... state.index,
          error: action.error
        }
      }
    default:
      return state;
  }
}