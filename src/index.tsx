// React
import * as React from "react";
import * as ReactDOM from "react-dom";

// Redux
import { Provider } from 'react-redux';
import store from './store';

// App
import App from './App';

// Styles
import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
