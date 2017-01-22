import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Profile from './User/Profile';
import Left from './Menu/Left';


const Main = () => (
  <MuiThemeProvider>
  <div>
  	<Left />
  	<Profile />
  </div>
  </MuiThemeProvider>
);

export default Main


//𝔎𝔯𝔦𝔰𝔥𝔫𝔞𝔎𝔲𝔪𝔞𝔯𝔖𝔖
