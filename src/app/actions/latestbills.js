
const {
  LATESTBILLS_SUCCESS,
  LATESTBILLS_FAIL
} = require('../constants/ActionTypes').default;

import * as homeService from '../services/latestbills';

export function index(param, header, filter) {
  return dispatch => {
    homeService.req.index(param, header, filter).then(data => {
      dispatch({
        type: LATESTBILLS_SUCCESS,
        data: data
      });
    }).catch(error => {
      dispatch({
        type: LATESTBILLS_FAIL,
        error: error
      });
    })
  }
}