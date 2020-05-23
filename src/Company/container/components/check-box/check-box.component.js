import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBoxComponent = (props) => {
	const { category } = props;
	const [state, setState] = React.useState(category);
	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	return (
		<div>
			<FormGroup row>
				{Object.entries(state).map(([key, value], index) => (
					<FormControlLabel
						key={index}
						control={<Checkbox checked={value} onChange={handleChange} name={key} color="primary" />}
						label={key.toUpperCase()}
					/>
				))}
			</FormGroup>
		</div>
	);
};

export default CheckBoxComponent;
