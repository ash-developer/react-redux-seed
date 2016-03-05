import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

class Subpage1 extends Component {

  render() {
    return (
      <div>
        <h2>sub page1 (rendered: {new Date().toString()})</h2>
      </div>
    );
  }

}

export default Subpage1;
