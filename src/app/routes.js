
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Container from './components/container';

import LatestBills from './layouts/LatestBills';
import DetailedBill from './layouts/DetailedBill';
import NotFound from './layouts/404';

export default(
  <Route path="/" component={Container}>
    <IndexRoute component={LatestBills} />
    <Route path="bill/:billId" component={DetailedBill} />
    <Route path="*" component={NotFound} />
  </Route>
)