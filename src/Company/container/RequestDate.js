import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import CustomSelect from './components/select-component/select.component';
import DateFnsUtils from '@date-io/date-fns';

import PhaseDetails from './components/phase-table/phase-details';

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
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

function RequestDate(props) {
	const { container } = props;
	const classes = useStyles();

	const [state, setState] = React.useState({ ...PhaseDetails, selected_date: new Date('2020-05-23T21:11:54') });

	const handleDateChange = (date) => {
		setState({ ...state, selected_date: date });
	};

	return (
		<React.Fragment>
			<Paper>
				<Typography variant="h3">RequestDate</Typography>
				<div>
					<Typography variant="h5">Select Phase:</Typography>
					<CustomSelect selected_phase={state.selected_phase} />
				</div>
				<div>
					<Typography variant="h5">Date:</Typography>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							margin="normal"
							id="date-picker-dialog"
							label="Date picker dialog"
							format="MM/dd/yyyy"
							value={state.selected_date}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
						/>
					</MuiPickersUtilsProvider>
				</div>
				<div>
					<Button variant="contained" color="primary" onClick={() => alert('Date Requested')}>
						Request Date
					</Button>
				</div>
			</Paper>
		</React.Fragment>
	);
}

export default RequestDate;
