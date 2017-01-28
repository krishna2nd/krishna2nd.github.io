import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {white, green900, green300, yellowA700, black, blue300} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 5
  },
  wrapper: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap',
  }
};

function handleTouchTap() {
}

export default class SkillChips extends React.Component {

  render() {
    return (
      <div style={styles.wrapper}>
         <Chip
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            <Avatar size={20} color={black} backgroundColor={blue300}>
              GO
            </Avatar>
            Golang
        </Chip>
        <Chip
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={20} color={black} backgroundColor={yellowA700}>
            JS
          </Avatar>
          Javascript
        </Chip>

        <Chip onTouchTap={handleTouchTap} style={styles.chip}>
          <Avatar size={20}>A</Avatar>
          HTML 5
        </Chip>

        <Chip
          backgroundColor={green300}
          onTouchTap={handleTouchTap}
          style={styles.chip}
        >
          <Avatar size={20} color={white} backgroundColor={green900}>
            JS
          </Avatar>
          Node.js
        </Chip>
      </div>
    );
  }
}