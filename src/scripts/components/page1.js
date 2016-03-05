import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import * as actions from '../actions/common';
import Dumb from './page1/dumb';
import Clever from './page1/clever';

@connect(
  state => ({
    other: state.other.get('action')
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
class Page1 extends Component {

  componentDidMount() {
    setInterval(() => {
      this.props.actions.action2();
    }, 1000);
  }

  //on state changes re-renders only dumb components
  render() {
    return (
      <div>
        <h1>Page1 (rendered: {new Date().toString()})</h1>

        <Dumb />
        <Clever />

        <Link to="/page1/subpage1">subpage1</Link>&nbsp;
        <Link to="/page1/subpage2">subpage2</Link>

        <div>{this.props.children}</div>
      </div>
    );
  }

}

export default Page1;
