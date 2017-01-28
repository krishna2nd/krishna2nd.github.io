import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import './ProfileInfo.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import SkillChips from './../Skills/Chips.jsx';
import PersonalInfo from './PersonalInfo.jsx';
const styles = {
  header: {
    backgroundColor: '#44AFFF',
    color: '#FFFFFF'
  },
  text: {
    color: '#ABABAB'
  }
};

class ProfileCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="KRISHNA KUMAR"
          titleColor= "#FFFFFF"
          subtitleColor= '#CDCDCD'
          subtitle="krishna2nd@gmail.com"
          avatar={<Avatar src="krishna.jpg"
              size={80}
             />}
          actAsExpander={true}
          showExpandableButton={true}
          style= {styles.header}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="left"
            label=" "
          />
        </CardText>
       
        <CardTitle title="Summary" subtitle="7.8 years of experience in web/server app developments" expandable={true} />
        <CardText expandable={true}>
        <i style={styles.text}>
           A highly skilful Linux System/Web developer with 7.8 years of experience in Saltside, One.com, Infosys
  Technologies Ltd, with strong base in Problem Analysis, System/web development, administration, Test
  Automation, Testing and OS components testing.
        </i>
        <SkillChips />
          <PersonalInfo />
        </CardText>
      </Card>
    );
  }
}

class ProfileInfo extends Component {
  render() {
    return (
      <ProfileCard/>
    );
  }
}

export default ProfileInfo;
