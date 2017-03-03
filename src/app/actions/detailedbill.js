const {
  DETAILEDBILL_SUCCESS,
  DETAILEDBILL_FAIL
} = require('../constants/ActionTypes').default;

import * as homeService from '../services/detailedbill';

export function index(param, header, filter) {
  return dispatch => {
    homeService.req.index(param, header, filter).then(data => {
      dispatch({
        type: DETAILEDBILL_SUCCESS,
        data: data
      });
    }).catch(error => {
      dispatch({
        type: DETAILEDBILL_FAIL,
        error: error
      });
    })
  }
}