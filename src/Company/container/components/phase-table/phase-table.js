import React from 'react';
import MaterialTable from 'material-table';

import PhaseDetails from './phase-details';

const CustomTable = () => {
	const [state, setState] = React.useState(PhaseDetails);

	return (
		<div>
			<MaterialTable
				title="Phase Details"
				columns={state.columns}
				data={state.data}
				editable={{
					onRowAdd: (newData) =>
						new Promise((resolve) => {
							setTimeout(() => {
								resolve();
								setState((prevState) => {
									const data = [...prevState.data];
									data.push(newData);
									return { ...prevState, data };
								});
								console.log(state);
							}, 600);
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise((resolve) => {
							resolve();
							if (oldData) {
								setState((prevState) => {
									const data = [...prevState.data];
									data[data.indexOf(oldData)] = newData;
									return { ...prevState, data };
								});
							}
						}),
					onRowDelete: (oldData) =>
						new Promise((resolve) => {
							setTimeout(() => {
								resolve();
								setState((prevState) => {
									const data = [...prevState.data];
									data.splice(data.indexOf(oldData), 1);
									return { ...prevState, data };
								});
							}, 600);
						}),
				}}
			/>
		</div>
	);
};

export default CustomTable;
