import React from 'react';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';

function ViewStudents(props) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function createData(class_, board, year, percentage) {
		return { class_, board, year, percentage };
	}

	const rows = [createData('10th', 'SSC', '2015', '90')];

	const [state, setState] = React.useState({
		columns: [
			{ title: 'SR.NO', field: 'srNo', type: 'numeric' },
			{ title: 'Name', field: 'name' },
			{ title: 'Class', field: 'class', lookup: { FE: 'FE', SE: 'SE', TE: 'TE', BE: 'BE' } },
			{ title: 'Department', field: 'department' },
			{ title: 'Roll No.', field: 'rollNo' },
		],
		/**Temporary data
		 * #TODO create using API data
		 */
		data: [
			{
				srNo: 1,
				name: 'asdf',
				class: 'TE',
				department: 'Computer',
				rollNo: '100CS00',
			},
			{
				srNo: 1,
				name: 'asdf',
				class: 'TE',
				department: 'Computer',
				rollNo: '100CS00',
			},
			{
				srNo: 1,
				name: 'asdf',
				class: 'TE',
				department: 'Computer',
				rollNo: '100CS00',
			},
			{
				srNo: 1,
				name: 'asdf',
				class: 'TE',
				department: 'Computer',
				rollNo: '100CS00',
			},
		],
	});

	return (
		<React.Fragment>
			<MaterialTable
				title="Student Details"
				columns={state.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View User',
						onClick: () => {
							setOpen(true);
						},
					},
				]}
				data={state.data}
				options={{
					grouping: true,
					headerStyle: {
						backgroundColor: '#01579b',
						color: '#FFF',
					},
					actionsColumnIndex: -1,
					filtering: true,
				}}
			/>
			{/**This is for the Popup generated on clicking student for details
			 * #TODO handel edit and save
			 */}
			<Dialog open={open} onClose={handleClose} aria-labelledby="student-view-title" fullWidth>
				<DialogTitle id="form-dialog-title">Name</DialogTitle>
				<DialogContent>
					<Typography variant="h6">Personal Details:</Typography>
					<DialogContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<div>
							<Typography>Name</Typography>
							<Typography>E-mail:</Typography>
							<Typography>Mobile No:</Typography>
						</div>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							style={{ width: '30%', height: '30%' }}
						/>
					</DialogContent>
					<DialogContent>
						<Typography variant="h6">Class Details:</Typography>
						<Typography>Department:</Typography>
						<Typography>Class:</Typography>
						<Typography>Roll No:</Typography>
					</DialogContent>
					<DialogContent>
						<Typography variant="h6">Acadamic Details:</Typography>
						<TableContainer component={Paper}>
							<Table size="small" aria-label="acadamic-table">
								<TableHead>
									<TableRow key={'table-heading-vs1'}>
										<TableCell>Class</TableCell>
										<TableCell>Board</TableCell>
										<TableCell>Year of Passing</TableCell>
										<TableCell>Percentage</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={`${row.class}1`}>
											<TableCell>{row.class_}</TableCell>
											<TableCell>{row.board}</TableCell>
											<TableCell>{row.year}</TableCell>
											<TableCell>{row.percentage}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</DialogContent>
					<DialogContent>
						<Typography>Apply for Placements:</Typography>
					</DialogContent>
					<DialogContent>
						<Typography>Status:</Typography>
					</DialogContent>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleClose} color="primary">
						Edit
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}

export default ViewStudents;
