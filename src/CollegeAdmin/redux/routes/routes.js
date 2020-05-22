import React from 'react';
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
} from '../../containers';

export const routes = [
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
