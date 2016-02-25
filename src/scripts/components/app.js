import React from 'react';
import { Link } from 'react-router'

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>App</h1>

        <Link to={`/home`} activeClassName="active">home</Link><br />
        <Link to={`/about`}>about</Link>

        <div>{this.props.children}</div>
      </div>
    );
  }

}

export default App;
