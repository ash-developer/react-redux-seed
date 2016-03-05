import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

@connect(
  state => ({
  }),
  dispatch => ({
  })
)
class Clever extends Component {

  render() {
    return (
      <div>
        <h2>clever (rendered: {new Date().toString()})</h2>
      </div>
    );
  }

}

export default Clever;
