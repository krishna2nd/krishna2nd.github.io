import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import ActionViewList from 'material-ui/svg-icons/action/view-list'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import RaisedButton from 'material-ui/RaisedButton';

import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import MobileTearSheet from './MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

class MenuSkills extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => {
		console.log('test')
	 this.setState({open: !this.state.open});
 }

	render() {
		return (
			<ListItem
				primaryText="Skills"
				leftIcon={<ActionBuild color={blue500} />}
				initiallyOpen={false}
				primaryTogglesNestedList={true}
				nestedItems={[
					<ListItem
						key={1}
						primaryText="Web"
					/>,
					<ListItem
						key={2}
						primaryText="Database"
					/>,
					<ListItem
						key={3}
						primaryText="Protocols"
					/>,
					<ListItem
						key={4}
						primaryText="Tools & Applications"
					/>
				]}
			/>
		)
	}
}


class MenuEducation extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => {
		console.log('test')
	 this.setState({open: !this.state.open});
 }

	render() {
		return (
			<ListItem
				primaryText="Education"
				leftIcon={<ActionAccountBalance  color={blue500} />}
				initiallyOpen={false}
				primaryTogglesNestedList={true}
				nestedItems={[
					<ListItem
						key={1}
						primaryText="10th"
					/>,
					<ListItem
						key={2}
						primaryText="12th"
					/>,
					<ListItem
						key={3}
						primaryText="Batchelor"
					/>,
					<ListItem
						key={4}
						primaryText="Master Degree"
					/>
				]}
			/>
		)
	}
}


const style = {
	fontSize: 12
};

export default class Left extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
	}

	handleToggle = () => {
		console.log('test')
	 this.setState({open: !this.state.open});
 }

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
					onTouchTap={this.handleToggle}
				/>

				<Drawer open={this.state.open} style={style}>
					<AppBar
						title="Krishna"
						onTitleTouchTap={this.handleToggle}
						iconElementLeft={<IconButton
							onTouchTap={this.handleToggle}
							><NavigationClose/></IconButton>}
					/>
					<MobileTearSheet>
							<List>
								<Subheader></Subheader>
								<ListItem primaryText="Summary" leftIcon={<ActionFace color={blue500} />} />
								<MenuSkills />
								<MenuEducation />
								</List>
						</MobileTearSheet>
				</Drawer>
			</div>
		);
	}
}