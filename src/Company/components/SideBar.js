import React, { Fragment } from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText, Collapse, Typography } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EventIcon from '@material-ui/icons/Event';
import DetailIcon from '@material-ui/icons/Details';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import PostAddIcon from '@material-ui/icons/PostAdd';
import BusinessIcon from '@material-ui/icons/Business';
import { useTheme, makeStyles } from '@material-ui/core/styles';
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

	const [open, setOpen] = React.useState({ Home: true, College: false, Company: false, Student: false });

	const handleClick = (event, selected) => {
		var temp = !open[selected];
		setOpen({ ...open, [selected]: temp });
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
			title: 'Placement',
			titleIcon: <GroupAddIcon />,
			Sublist: [
				'Start Placement Drive',
				'Request Phase Date',
				'Current Placement Details',
				'View Placements Held',
			],
			SublistIcon: [<PlayArrowIcon />, <EventIcon />, <DetailIcon />, <CheckCircleIcon />],
			SublistLink: ['start-placement-drive', 'request-date', 'current-placement', 'view-placements'],
		},
		{
			title: 'Notices & Posts',
			titleIcon: <BusinessIcon />,
			Sublist: ['View Notices and Posts', 'Create Post/Notice', 'QnA'],
			SublistIcon: [<LocalPostOfficeIcon />, <PostAddIcon />, <QuestionAnswerIcon />],
			SublistLink: ['view-notices', 'create-post', 'QnA'],
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
								{open[item.title] ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Divider />
							{item.Sublist.map((sublist, index) => {
								return (
									<Collapse
										in={open[item.title]}
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
			</List>
		</div>
	);
}

export default SideBar;
