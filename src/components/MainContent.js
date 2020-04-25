import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './useStyles';

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
			<Typography variant="h3">Main Content</Typography>
		</main>
	);
}

export default MainContent;
