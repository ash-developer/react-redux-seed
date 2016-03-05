import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

class Dumb extends Component {

  render() {
    return (
      <div>
        <h2>dumb (rendered: {new Date().toString()})</h2>
      </div>
    );
  }

}

export default Dumb;
