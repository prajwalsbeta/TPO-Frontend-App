import React, { Fragment } from 'react';

import { Divider, List, ListItem, ListItemIcon, ListItemText, Collapse, Typography } from '@material-ui/core';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Info from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setOpen } from '../redux/sidebar/sidebar.actions';
import { selectSidebar, selectMenuItems } from '../redux/sidebar/sidebar.selectors';
//Redux

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
	const { container, setOpen, sidebar, menuItems } = props;
	const classes = useStyles();
	const theme = useTheme();
	/**
	 * Menu item object format
	 * @typedef {object}
	 * @property {string} title
	 * @property {JSX} titleIcon
	 * @property {Array.<string>} Sublist
	 * @property {Array.<JSX>} SublistIcon
	 * @property {Array.<string>} SublistLink - Redirect to path
	 */

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
							<ListItem button onClick={() => setOpen(item.title)} key={item.title}>
								<ListItemIcon>{item.titleIcon}</ListItemIcon>
								<ListItemText primary={item.title} />
								{sidebar[item.title] ? <ExpandLess /> : <ExpandMore />}
							</ListItem>
							<Divider />
							{item.Sublist.map((sublist, index) => {
								return (
									<Collapse
										in={sidebar[item.title]}
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

const mapStateToProps = createStructuredSelector({
	sidebar: selectSidebar,
	menuItems: selectMenuItems,
});

const mapDispatchToProps = (dispatch) => ({
	setOpen: (selected) => dispatch(setOpen(selected)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
