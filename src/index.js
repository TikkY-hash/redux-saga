import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry/'
import store from './store'

import './index.scss';



ReactDOM.render(
    <Provider store = {store}>
      <ErrorBoundry>
            <Router>
                 <App/>
            </Router>
      </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

