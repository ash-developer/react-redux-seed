import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Component } from 'react';
import * as actions from '../actions';

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

@connect(mapStateToProps, mapDispatchToProps)
class About extends Component {

  render() {
    return (
      <div>
        <h1>About</h1>
        <h3>current action value -> {this.props.action}</h3>
        <p onClick={this.props.actions.action1}>action 1</p>
        <p onClick={this.props.actions.action2}>action 2</p>
      </div>
    );
  }

}

export default About;
