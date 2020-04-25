import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTheme } from '@material-ui/core/styles';
import MainContent from './components/MainContent';
import Header from './components/Header';
import useStyles from './components/useStyles';
/**
 * Template File
 */
function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline /> {/*This is to normailze the CSS (Builtin component)*/}
			<Header />
			<MainContent />
		</div>
	);
}

export default App;
