import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';

/**this is state for storing open/display state the overlay/dialog box */
function ViewStudents(props) {
	const [open, setOpen] = useState(false);

	/**Handel view details */
	const handleClickOpen = (event, rowData) => {
		setOpen(true);
	};
	/**Handel close view details */
	const handleClose = () => {
		setOpen(false);
	};

	/**
	 * Thid func crates the rows of table
	 * @param {string} class_
	 * @param {sring} board
	 * @param {*} year
	 * @param {float} percentage
	 */
	function createData(class_, board, year, percentage) {
		return { class_, board, year, percentage };
	}

	const rows = [createData('10th', 'SSC', '2015', '90')];

	const [tableData, setTableData] = useState({
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
	/****TODO add URL and setTableData */
	// useEffect(()=>{
	// 	axios.get('URL')
	// 	.then(response=>{
	// 		console.log(response);
	// 	})
	// 	.catch(err=>{
	// 		console.error(err);
	// 	});
	// },[])

	return (
		<React.Fragment>
			<MaterialTable
				title="Student Details"
				columns={tableData.columns}
				actions={[
					{
						icon: () => <VisibilityIcon />,
						tooltip: 'View details',
						onClick: (event, rowData) => {
							handleClickOpen(event, rowData);
						},
					},
				]}
				data={tableData.data}
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
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="student-view-title"
				fullWidth
				disableEnforceFocus
			>
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
