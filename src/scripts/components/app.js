import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {

  render() {
    return (
      <div>
        <h1>App</h1>

        <Link to={`/page1`} activeClassName="active">page1</Link>&nbsp;
        <Link to={`/page2`}>page2</Link>

        <div>{this.props.children}</div>
      </div>
    );
  }

}

export default App;
