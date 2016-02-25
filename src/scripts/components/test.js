import React, { Component } from 'react';

class Test extends Component {

  static propTypes = {
    test: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
  };

  render() {
    return (
      <div>
        <h1>Hello World! {this.props.test}</h1>
        <input
          type="text"
          value={this.props.test}
          onChange={this.props.onChange}
        />
      </div>
    );
  }

}

export default Test;
