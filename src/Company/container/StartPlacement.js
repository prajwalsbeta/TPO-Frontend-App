import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Paper, TextField } from '@material-ui/core';

import StartPlacementForm from './components/start-placement-form/start-placement-form.component';

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

function StartPlacement(props) {
	const { container } = props;
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper>
				<Typography variant="h3">StartPlacement</Typography>
				<StartPlacementForm />
			</Paper>
		</React.Fragment>
	);
}

export default StartPlacement;
