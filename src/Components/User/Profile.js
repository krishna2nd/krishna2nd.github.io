import React from 'react';
import ProfileInfo from './ProfileInfo'
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const Profile = () => (
	<List>
	<ListItem>
	<ProfileInfo />
	</ListItem>
	</List>
);

export default Profile;