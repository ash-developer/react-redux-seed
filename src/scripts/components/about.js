import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/common';

@connect(
  state => ({
    action: state.common.get('action'),
    other: state.other.get('action')
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
class About extends Component {

  handleAction1Click = () => {
    this.props.actions.actionAsync();
  };

  render() {
    return (
      <div>
        <h1>About</h1>
        <h3>current common action value -> {this.props.action}</h3>
        <h3>current other action value -> {this.props.other}</h3>
        <p onClick={this.handleAction1Click}>action 1</p>
        <p onClick={this.props.actions.action2}>action 2</p>
      </div>
    );
  }

}

export default About;
