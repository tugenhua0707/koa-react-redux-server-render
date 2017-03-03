
var domainURL = 'https://ynuf.aliapp.org';
module.exports = {
  origin: domainURL,
  api: {
    detailedBills: domainURL + '/service/um.json',
    latestBills: domainURL + '/service/um.json'
  },
  apiTimeout: 5000,
  apiTimeoutMsg: '网络超时，请稍后再试！',
  apiErrorMsg: '网络异常，请稍后再试！',
  apiUnAuthMsg: '用户登录超时,请重新登录'
};