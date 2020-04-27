import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Info from '@material-ui/icons/Info';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';
/**
 * This is Navigation menu sidebar
 * @param {*} props
 */
function SideBar(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	/**
	 * List containing Menu Items, Add new Menus Here.
	 * @type {Array.<string>}
	 */
	const menuContents = ['Dashboard', 'Q & A', 'Company Approvals', 'Notices'];
	/**
	 * List the logos to be shown corresponding to menuContents, See the icons/logos [here]{@link https://material-ui.com/components/material-icons/}
	 * Don't forget to import the icons you use.
	 * @type {JSX}
	 */
	const menuContentsLogo = [<DashboardIcon />, <QuestionAnswerIcon />, <CheckCircleIcon />, <NotificationsIcon />];
	return (
		<div>
			<div className={classes.toolbar}>
				<Typography variant="h4" noWrap style={{ paddingTop: '5%' }}>
					AISSMS TPO
				</Typography>
			</div>
			<Divider />
			<List
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Nested List Items
					</ListSubheader>
				}
			>
				{menuContents.map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{menuContentsLogo[index]}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<ListItem button key={'About Us'}>
					<ListItemIcon>
						<Info />
					</ListItemIcon>
					<ListItemText primary={'About Us'} />
				</ListItem>
			</List>
		</div>
	);
}

export default SideBar;
