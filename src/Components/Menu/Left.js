import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import ActionViewList from 'material-ui/svg-icons/action/view-list'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

export default class Left extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar
          title="𝒦𝓇𝒾𝓈𝒽𝓃𝒶𝒦𝓊𝓂𝒶𝓇𝒮𝒮"
          iconClassNameRight={
            <IconButton>
              <MoreVertIcon onTouchTap={this.handleToggle} />
            </IconButton>
          }
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}