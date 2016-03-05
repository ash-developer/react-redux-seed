import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'
import * as actions from '../actions/common';
import Dumb from './page1/dumb';
import Clever from './page1/clever';

class Page1 extends Component {

  render() {
    return (
      <div>
        <h1>Page2 (rendered: {new Date().toString()})</h1>
      </div>
    );
  }

}

export default Page1;
