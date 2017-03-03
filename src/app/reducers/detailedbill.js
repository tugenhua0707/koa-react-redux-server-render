import {
  DETAILEDBILL_SUCCESS,
  DETAILEDBILL_FAIL
} from '../actions';

const initialState = {
  index: {
    data: null,
    error: null
  }
}
export function detailedBill(state = initialState, action) {
  switch (action.type) {
    case DETAILEDBILL_SUCCESS:
      return {
        ... state,
        index: {
          ... state.index,
          data: action.data
        }
      }
    case DETAILEDBILL_FAIL:
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