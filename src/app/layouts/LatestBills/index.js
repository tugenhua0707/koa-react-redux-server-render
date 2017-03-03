import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux'

import * as latestbillsAction  from '../../actions/latestbills';
console.log(latestbillsAction)
class LatestBills extends Component {

  componentDidMount() {
    
  }

  render() {
    console.log(this.props);
    return (
      <div>
        11111
      </div>
    )
  }
}

export default connect(state => ({
  latestBills: state.latestBills
}), dispatch => ({
  latestbillsAction: bindActionCreators(latestbillsAction, dispatch),
}))(LatestBills)