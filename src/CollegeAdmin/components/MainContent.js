import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
//Redux

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
	const { container, routes } = props;
	const classes = useStyles();
	const theme = useTheme();
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

const mapStateToProps = (state) => ({
	routes: state.routes.routes,
});

export default connect(mapStateToProps)(MainContent);
