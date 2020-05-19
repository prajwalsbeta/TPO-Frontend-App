import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import {
	AboutUs,
	ApproveCompany,
	ApproveDate,
	ApproveStudents,
	Home,
	OngoingPlacements,
	QnA,
	Statistics,
	UpcomingPlacements,
	ViewCompany,
	ViewPlacements,
	ViewStudents,
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
			path: '/view-students',
			exact: false,
			main: () => <ViewStudents />,
		},
		{
			path: '/approve-students',
			exact: false,
			main: () => <ApproveStudents />,
		},
		{
			path: '/about-us',
			exact: false,
			main: () => <AboutUs />,
		},
		{
			path: '/approve-company',
			exact: true,
			main: () => <ApproveCompany />,
		},
		{
			path: '/approve-date',
			exact: false,
			main: () => <ApproveDate />,
		},
		{
			path: '/ongoing-placements',
			exact: false,
			main: () => <OngoingPlacements />,
		},
		{
			path: '/QnA',
			exact: false,
			main: () => <QnA />,
		},
		{
			path: '/statistics',
			exact: true,
			main: () => <Statistics />,
		},
		{
			path: '/upcoming-placements',
			exact: false,
			main: () => <UpcomingPlacements />,
		},
		{
			path: '/view-company',
			exact: false,
			main: () => <ViewCompany />,
		},
		{
			path: '/view-placements',
			exact: false,
			main: () => <ViewPlacements />,
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
