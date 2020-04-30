import React, { Fragment } from 'react';

import { Divider, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Info from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import SchoolIcon from '@material-ui/icons/School';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

/**
 * This is Navigation menu sidebar
 * @param {*} props
 */
function SideBar(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();

	const [open, setOpen] = React.useState('Home');

	const handleClick = (event, selected) => {
		setOpen(selected);
	};
	/**
	 * Menu item object format
	 * @typedef {object}
	 * @property {string} title
	 * @property {JSX} titleIcon
	 * @property {Array.<string>} Sublist
	 * @property {Array.<JSX>} SublistIcon
	 * @property {Array.<string>} SublistLink - Redirect to path
	 */

	/**
	 * list of objects of Menu items
	 * @type {Array.<Menus>}
	 */
	const menuItems = [
		{
			title: 'Student',
			titleIcon: <PeopleIcon />,
			Sublist: ['View Students', 'Approve Registrations'],
			SublistIcon: [<FormatListNumberedIcon />, <CheckCircleIcon />],
			SublistLink: ['/view-students', '/approve-students'],
		},
		{
			title: 'Company',
			titleIcon: <BusinessIcon />,
			Sublist: [
				'View Company Details',
				'Approve Registrations',
				'Approve Date for Campus Placement',
				'View Upcoming Placements',
				'View Ongoing Placements',
				'View Placement Completed',
			],
			SublistIcon: [
				<FormatListNumberedIcon />,
				<CheckCircleIcon />,
				<CheckCircleIcon />,
				<FormatListNumberedIcon />,
				<FormatListNumberedIcon />,
				<FormatListNumberedIcon />,
			],
			SublistLink: [
				'/view-company',
				'/approve-company',
				'/approve-date',
				'/upcoming-placements',
				'/ongoing-placements',
				'/view-placements',
			],
		},
		{
			title: 'College',
			titleIcon: <SchoolIcon />,
			Sublist: ['View Placement Statistics', 'QnA'],
			SublistIcon: [<FormatListNumberedIcon />, <QuestionAnswerIcon />],
			SublistLink: ['/statistics', '/QnA'],
		},
	];

	return (
		<div style={{ width: 240 }}>
			<div className={classes.toolbar}>
				<Typography variant="h4" noWrap style={{ paddingTop: '5%', textAlign: 'center' }}>
					AISSMS{' '}
				</Typography>
			</div>
			<Divider />
			<List key="list-menu-key">
				<Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
					<ListItem button key={'home'}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={'Home'} />
					</ListItem>
				</Link>

				<Divider />
				{menuItems.map((item) => {
					return (
						<Fragment key={`${item.title}-f`}>
							<ListItem button onClick={(event) => handleClick(event, item.title)} key={item.title}>
								<ListItemIcon>{item.titleIcon}</ListItemIcon>
								<ListItemText primary={item.title} />
								{open === item.title ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Divider />
							{item.Sublist.map((sublist, index) => {
								return (
									<Collapse
										in={open === item.title}
										timeout="auto"
										unmountOnExit
										key={`${item.title}-${index}c`}
									>
										<List component="div" disablePadding>
											<Link
												style={{ color: 'inherit', textDecoration: 'none' }}
												to={item.SublistLink[index]}
											>
												<ListItem button className={classes.nested} key={sublist[index]}>
													<ListItemIcon>{item.SublistIcon[index]}</ListItemIcon>
													<ListItemText primary={item.Sublist[index]} />
												</ListItem>
											</Link>
										</List>
									</Collapse>
								);
							})}
						</Fragment>
					);
				})}
				<Divider />

				<Link style={{ color: 'inherit', textDecoration: 'none' }} to="/about-us">
					<ListItem button key={'About Us'}>
						<ListItemIcon>
							<Info />
						</ListItemIcon>
						<ListItemText primary={'About Us'} />
					</ListItem>
				</Link>
			</List>
		</div>
	);
}

export default SideBar;
