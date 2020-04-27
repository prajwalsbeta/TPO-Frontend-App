import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './useStyles';
import { Paper } from '@material-ui/core';
import Footer from '../../college/Template/Footer';

function MainContent(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
            <Paper>
			<Typography variant="h3">Main Content</Typography>
            </Paper>
		</main>
		<Footer />
	);
}

export default MainContent;
