import React from 'react';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

function CollegeAdmin() {
	const useStyles = makeStyles((theme) => ({
		main: {
			display: 'flex',
		},
	}));
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<Provider store={store}>
				<Header />
				<MainContent />
			</Provider>
		</div>
	);
}

export default CollegeAdmin;
