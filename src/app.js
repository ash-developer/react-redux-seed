import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import loggerMiddleware from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './styles/style.less';
import reducers from './scripts/reducers/index';
import saga from './scripts/sagas/index';
import App from './scripts/components/app';
import Page1 from './scripts/components/page1';
import Subpage1 from './scripts/components/page1/subpage1';
import Subpage2 from './scripts/components/page1/subpage2';
import Page2 from './scripts/components/page2';
import NoMatch from './scripts/components/no-match';

let store = createStore(reducers, applyMiddleware(
  loggerMiddleware(), sagaMiddleware(saga)
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="page1" />

        <Route path="page1" component={Page1}>
          <IndexRedirect to="subpage1" />

          <Route path="subpage1" component={Subpage1} />
          <Route path="subpage2" component={Subpage2} />
        </Route>
        <Route path="page2" component={Page2} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
