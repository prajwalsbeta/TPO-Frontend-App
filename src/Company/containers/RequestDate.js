import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

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

function RequestDate(props) {
	const { container } = props;
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper>
				<Typography variant="h3">RequestDate</Typography>
			</Paper>
		</React.Fragment>
	);
}

export default RequestDate;
