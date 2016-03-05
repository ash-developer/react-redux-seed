import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import * as actions from '../../actions/common';

@connect(
  state => ({
    other: state.other.get('action')
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
class Subpage2 extends Component {

  render() {
    return (
      <div>
        <h2>sub page2 (rendered: {new Date().toString()})</h2>
      </div>
    );
  }

}

export default Subpage2;
