import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import './styles/style.less';
import reducers from './scripts/reducers'
import App from './scripts/components/app';
import Home from './scripts/components/home';
import About from './scripts/components/about';
import NoMatch from './scripts/components/no-match';

let store = createStore(reducers);

ReactDOM.render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
