import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'

import * as detailedbillAction  from '../../actions/detailedbill';

class DetailedBill extends Component {

  componentDidMount() {
    
  }
  render() {
    console.log(this.props);
    return (
      <div>
        2222
      </div>
    )
  }
}

export default connect(state => ({
  detailedBill: state.detailedBill
}), dispatch => ({
  detailedbillAction: bindActionCreators(detailedbillAction, dispatch),
}))(DetailedBill)