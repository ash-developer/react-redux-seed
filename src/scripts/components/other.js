import React, { Component } from 'react';
import Test from './test';

class Other extends Component {

  static propTypes = {
    initial: React.PropTypes.string
  };

  static getDefaultProps() {
    return {
      initial: ''
    };
  }

  componentWillMount() {
    this.setState({
      value: this.props.initial
    });
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  render() {
    return (
      <Test test={this.state.value} onChange={this.handleChange} />
    );
  }

}

export default Other;
