import React from 'react';

import { Select, FormControl, MenuItem, InputLabel, TextField } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import PhaseDetails from '../phase-table/phase-details';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const CustomSelect = (props) => {
	const classes = useStyles();

	const [state, setState] = React.useState({ ...PhaseDetails, selected_description: '' });

	React.useEffect(() => {
		const description = state.data.find((data) => data.phase_name === state.selected_phase);
		if (description !== undefined) {
			setState({ ...state, selected_description: description.phase_description });
		}
	}, [state.selected_phase]);

	const handleChange = (event) => {
		setState({ ...state, selected_phase: event.target.value });
	};

	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel>Phase</InputLabel>
				<Select id="phase-select" value={state.selected_phase} onChange={handleChange} label="Phase">
					{state.data.map((data, index) => {
						return (
							<MenuItem key={index} value={data.phase_name}>
								{data.phase_name}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
			<div>
				<Typography variant="h5">Phase Description:</Typography>
				<TextField
					id="phase-description"
					multiline
					rows={2}
					variant="outlined"
					defaultValue={state.selected_description}
				/>
			</div>
		</div>
	);
};

export default CustomSelect;
