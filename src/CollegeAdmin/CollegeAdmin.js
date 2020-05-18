import React from 'react';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';

function CollegeAdmin() {
	const useStyles = makeStyles((theme) => ({
		main: {
			display: 'flex',
		},
	}));
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<Header />
			<MainContent />
		</div>
	);
}

export default CollegeAdmin;
