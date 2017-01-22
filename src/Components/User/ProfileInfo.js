import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';

import './ProfileInfo.css';

const style = {
  height: 200,
  width: '100%',
  padding: 10,
  paddingTop: 20,
  backgroundColor: '#44AFFF',
  color: 'white',
  textAlign: 'center'
};

class ProfileInfo extends Component {
  render() {
    return (
       <Paper style={style} zDepth={1} >
        <div className="Profile">
            <Avatar src="krishna.jpg"
              size={80}
             />
          <div className="Profile-header">
            <h2>𝒦𝓇𝒾𝓈𝒽𝓃𝒶𝒦𝓊𝓂𝒶𝓇𝒮𝒮</h2>
          </div>
          <p className="Profile-intro">
            <i> Skillfull web dev looking for better opportunities. </i>
          </p>
        </div>
      </Paper>
    );
  }
}

export default ProfileInfo;
