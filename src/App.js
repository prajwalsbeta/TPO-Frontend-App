import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainContent from './components/college/MainContent';
import Header from './components/college/Header';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
// import Temp from './temp'
/**
 * Template File
 */
function App() {
	const drawerWidth = 240;
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
		},
	}));

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline /> {/*This is to normailze the CSS (Builtin component)*/}
			<Router>
				<Header />
				<MainContent />
			</Router>
		</div>
		// <Temp/>
	);
}

export default App;
