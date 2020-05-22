import React from 'react';

import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PeopleIcon from '@material-ui/icons/People';
import BusinessIcon from '@material-ui/icons/Business';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SchoolIcon from '@material-ui/icons/School';

export const menuItems = [
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
