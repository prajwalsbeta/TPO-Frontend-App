import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './Pages/about-us';
import ApproveCompany from './Pages/approve-company';
import ApproveDate from './Pages/approve-date';
import ApproveStudents from './Pages/approve-students';
import Home from './Pages/Home';
import OngoingPlacements from './Pages/ongoing-placements';
import QnA from './Pages/QnA';
import Statistics from './Pages/statistics';
import UpcomingPlacements from './Pages/upcoming-placements';
import ViewCompany from './Pages/view-company';
import ViewPlacements from './Pages/view-placements';
import ViewStudents from './Pages/view-students';
import Temp from '../../temp';

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
		// <React.Fragment>
		// 	<main className={classes.content}>
		// 	<div className={classes.toolbar} />
		// 	<Temp/>
		// 	</main>
		// </React.Fragment>
	);
}

export default MainContent;
