import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import {
	CreateNotice,
	CurrentDatails,
	Home,
	QnA,
	RequestDate,
	StartPlacement,
	ViewNotice,
	ViewPlacements,
} from '../containers';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		textAlign: 'center',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

function MainContent(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const routes = [
		{
			path: '/',
			exact: true,
			main: () => <Home />,
		},
		{
			path: '/start-placement-drive',
			exact: false,
			main: () => <StartPlacement />,
		},
		{
			path: '/request-date',
			exact: false,
			main: () => <RequestDate />,
		},
		{
			path: '/current-placement',
			exact: false,
			main: () => <CurrentDatails />,
		},
		{
			path: '/view-placements',
			exact: true,
			main: () => <ViewPlacements />,
		},
		{
			path: '/view-notices',
			exact: false,
			main: () => <ViewNotice />,
		},
		{
			path: '/create-post',
			exact: false,
			main: () => <CreateNotice />,
		},
		{
			path: '/QnA',
			exact: false,
			main: () => <QnA />,
		},
	];
	return (
		<React.Fragment>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Switch>
					{routes.map((route, index) => (
						<Route key={index} path={route.path} exact={route.exact} children={route.main} />
					))}
				</Switch>
			</main>
		</React.Fragment>
	);
}

export default MainContent;
