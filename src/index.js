import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './index.css';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
  <Main />,
  document.getElementById('profile')
);
