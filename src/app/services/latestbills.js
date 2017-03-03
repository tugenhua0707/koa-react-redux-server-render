import * as requestService from './request';
import * as config from '../etc/config';
export const req = {
  index: function(params, header, filterStateFlag, filterJSONFlag, filterCodeFlag) {
    return requestService.commonGet(config.api.latestBills, {}, header, filterStateFlag, filterJSONFlag, filterCodeFlag);
  }
}