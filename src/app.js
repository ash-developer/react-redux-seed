import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './styles/style.less';
import App from './scripts/components/app';
import Home from './scripts/components/home';
import About from './scripts/components/about';
import NoMatch from './scripts/components/no-match';

ReactDOM.render (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home}/>
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
